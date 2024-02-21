"use client";
import React, { useState } from 'react';
import { Box, Flex, Tabs } from "@radix-ui/themes";
import { Progress, Modal, ModalContent, ModalCloseButton, ModalOverlay, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

import StylesData from '@/../styles.json';

interface ImageDisplayProps {
    imageUrl: string | null;
    altText: string;
    imageList: string[]; // Assuming imageList is an array of image URLs
}

const Text_to_Image: React.FC<ImageDisplayProps> = ({ imageUrl, altText, imageList = [] }) => {
    const [prompt, setPrompt] = useState("");
    const [negativePrompt, setNegativePrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedStyles, setSelectedStyles] = useState<string[]>([]);


    const handleGenerateClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "http://127.0.0.1:8888/v1/generation/text-to-image",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        negative_prompt: negativePrompt,
                        style_selections: selectedStyles,
                        performance_selection: "Speed",
                        aspect_ratios_selection: "1152*896",
                        image_number: 1,
                        image_seed: -1,
                        sharpness: 2,
                        guidance_scale: 4,
                        base_model_name: "juggernautXL_v8Rundiffusion.safetensors",
                        refiner_model_name: "None",
                        refiner_switch: 0.5,
                        loras: [
                            {
                                model_name: "sd_xl_offset_example-lora_1.0.safetensors",
                                weight: 0.1
                            }
                        ],
                        advanced_params: {
                            adaptive_cfg: 7,
                            adm_scaler_end: 0.3,
                            adm_scaler_negative: 0.8,
                            adm_scaler_positive: 1.5,
                            canny_high_threshold: 128,
                            canny_low_threshold: 64,
                            controlnet_softness: 0.25,
                            debugging_cn_preprocessor: false,
                            debugging_inpaint_preprocessor: false,
                            disable_preview: false,
                            freeu_b1: 1.01,
                            freeu_b2: 1.02,
                            freeu_enabled: false,
                            freeu_s1: 0.99,
                            freeu_s2: 0.95,
                            inpaint_disable_initial_latent: false,
                            inpaint_engine: "v1",
                            inpaint_erode_or_dilate: 0,
                            inpaint_respective_field: 1,
                            inpaint_strength: 1,
                            invert_mask_checkbox: false,
                            mixing_image_prompt_and_inpaint: false,
                            mixing_image_prompt_and_vary_upscale: false,
                            overwrite_height: -1,
                            overwrite_step: -1,
                            overwrite_switch: -1,
                            overwrite_upscale_strength: -1,
                            overwrite_vary_strength: -1,
                            overwrite_width: -1,
                            refiner_swap_method: "joint",
                            sampler_name: "dpmpp_2m_sde_gpu",
                            scheduler_name: "karras",
                            skipping_cn_preprocessor: false
                        },
                        require_base64: false,
                        async_process: false,
                        webhook_url: "",
                        image_prompts: []
                    }),
                }
            );
            const data = await response.json();
            setLoading(false);
            setGeneratedImages(data.map((img: any) => img.url));


            console.log(data);
            console.log(selectedStyles);
        } catch (error) {
            console.error("Error generating images:", error);
            setLoading(false); // Stop loading indicator on error
        }
    };

    const handleStopClick = async () => {
        setLoading(false); // Stop the loading indicator
        try {
            const response = await fetch(
                "http://127.0.0.1:8888/v1/generation/stop",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);
            if (data.msg === "success") {
                // Handle successful stop
                console.log("Generation stopped successfully");
            } else {
                // Handle unsuccessful stop
                console.error("Failed to stop generation:", data);
            }
        } catch (error) {
            console.error("Error stopping generation:", error);
        }
    };


    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const toggleStyleSelection = (styleName: string) => {
        setSelectedStyles(prevStyles =>
            prevStyles.includes(styleName)
                ? prevStyles.filter(style => style !== styleName)
                : [...prevStyles, styleName]
        );
    };



    return (
        <div className="mt-5">
            <Tabs.Root defaultValue="generate">
                <Tabs.List>
                    <Tabs.Trigger value="generate">Generate</Tabs.Trigger>
                    <Tabs.Trigger value="gallery">Gallery</Tabs.Trigger>
                    <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                </Tabs.List>

                <Box px="4" pt="3" pb="3">
                    <Tabs.Content value="generate">
                        <div className="mt-2 flex flex-col">
                            <div className="flex">
                                <div className="bg-secondary border-primary/30 border rounded-lg flex-1 mr-4"
                                     style={{aspectRatio: '16/9', position: 'relative', overflow: 'hidden'}}>
                                    {loading ? (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center text-primary text-lg">
                                            Loading...
                                        </div>
                                    ) : (
                                        generatedImages.length === 1 ? (
                                            <img src={generatedImages[0]} alt={altText}
                                                 className="absolute inset-0 w-full h-full object-cover"
                                                 onClick={() => handleImageClick(generatedImages[0])}/>
                                        ) : (
                                            <div
                                                className="grid grid-cols-2 gap-4 p-4 scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
                                                style={{maxHeight: '100%', overflowY: 'auto'}}
                                            >
                                                {generatedImages.map((img, index) => (
                                                    <div key={index} className="relative">
                                                        <img
                                                            src={img}
                                                            alt={altText}
                                                            className="w-full h-full object-cover rounded-lg mb-2 cursor-pointer"
                                                            onClick={() => handleImageClick(img)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                        )
                                    )}

                                </div>


                                <div
                                    className="bg-secondary border-primary/30 border rounded-lg flex flex-wrap w-[300px] h-[700px] overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md scroll-smooth"
                                    style={{maxHeight: '700px'}}>
                                    {StylesData.map((style, index) => (
                                        <div
                                            key={index}
                                            className="p-4 mb-4 justify-center items-center shadow-md rounded-lg relative"
                                            style={{width: '50%'}}
                                            onClick={() => toggleStyleSelection(style.name)}
                                        >
                                            <img
                                                src={style.path}
                                                alt={style.name}
                                                className="h-[150px] w-full object-cover rounded-lg mb-2 cursor-pointer"
                                            />
                                            {selectedStyles.includes(style.name) && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-10 w-10 absolute top-2 right-2 text-green-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                            <div className="text-sm text-primary text-center">{style.name}</div>
                                        </div>

                                    ))}
                                    <div className="text-primary text-center border-t border-primary/20 mt-3 mb-4 ">Selected Styles: {selectedStyles.join(', ')}</div>
                                </div>


                            </div>
                            <div className="flex items-center justify-center">
                                <textarea
                                    placeholder="Enter your negative prompt here..."
                                    className="flex-grow mt-2 h-20  mr-28 px-4 py-2 border border-primary/30 rounded-lg bg-secondary focus:border-primary/50 focus:outline-none scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
                                    value={negativePrompt}
                                    onChange={(e) => setNegativePrompt(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center">
                                <textarea
                                    placeholder="Enter your prompt here..."
                                    className="flex-grow mt-2 h-20 px-4 py-2 border border-primary/30 rounded-lg bg-secondary focus:border-primary/50 focus:outline-none scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                />
                                {loading && (
                                    <Button
                                        className="ml-2 px-4 py-2 border border-primary/30 rounded-lg bg-secondary text-primary hover:bg-primary/20 transition-colors"
                                        onClick={handleStopClick}
                                    >
                                        Stop
                                    </Button>
                                )}
                                <button
                                    className="ml-2 px-4 py-2 border border-primary/30 rounded-lg bg-secondary text-primary hover:bg-primary/20 transition-colors"
                                    onClick={handleGenerateClick}
                                >
                                    Generate
                                </button>
                            </div>
                            {loading && <Progress size='xs' isIndeterminate className="flex-grow rounded-lg mt-2" />}

                        </div>
                    </Tabs.Content>


                    <Tabs.Content value="gallery">
                        coming soon
                    </Tabs.Content>

                    <Tabs.Content value="advanced">
                        coming soon
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
            <Modal isOpen={!!selectedImage} onClose={handleCloseModal} >
                <ModalContent >
                    <ModalHeader className="bg-secondary text-primary border-primary/20 border-b">Image Preview</ModalHeader>
                    <ModalCloseButton className="bg-primary text-primary" />
                    <ModalBody className="bg-secondary">
                        {selectedImage && (
                            <img src={selectedImage} alt="Selected Image" className="w-full h-full object-contain" />
                        )}
                    </ModalBody>
                    <ModalFooter className="bg-secondary text-primary border-primary/20 border-t">
                        <Flex align="center" gap="3">
                            <Button variant="soft" onClick={handleCloseModal} className="bg-secondary border border-primary/20 hover:bg-primary/40 ">Close</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>




        </div>
    );
};

export default Text_to_Image;