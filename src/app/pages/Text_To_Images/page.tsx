"use client";
import { Box, Tabs } from "@radix-ui/themes";
import React from 'react';
import {Progress} from "@chakra-ui/react";

interface ImageDisplayProps {
    imageUrl: string | null;
    altText: string;
    imageList: string[]; // Assuming imageList is an array of image URLs
}
const Text_to_Image: React.FC<ImageDisplayProps> = ({ imageUrl, altText, imageList = [] }) => {

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
                                {/* Primary Container */}
                                <div className="bg-secondary border-primary/30 border rounded-lg flex-1 mr-4"
                                     style={{aspectRatio: '16/9', position: 'relative', overflow: 'hidden'}}>
                                    {imageUrl && (
                                        <img src={imageUrl} alt={altText}
                                             className="absolute inset-0 w-full h-full object-cover"/>
                                    )}
                                    {!imageUrl && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center text-primary text-lg">
                                            Image will be displayed here
                                        </div>
                                    )}
                                </div>

                                {/* Secondary Container */}
                                <div
                                    className="bg-secondary border-primary/30 border rounded-lg flex flex-col w-[300px] overflow-y-auto">
                                    {imageList.map((image, index) => (
                                        <div key={index} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                                            <img src={image} alt={`Image ${index}`}
                                                 className="h-40 w-full object-cover rounded-lg mb-2"/>
                                            <div className="text-sm text-gray-600">Image {index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Textarea */}
                            <div className="flex items-center">
    <textarea
        placeholder="Enter the prompt here..."
        className="flex-grow mt-5 h-20 px-4 py-2 border border-primary/30 rounded-lg bg-secondary focus:border-primary/50 focus:outline-none scroll-smooth scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
    />
                                <button className="ml-2 px-4 py-2 border border-primary/30 rounded-lg bg-secondary text-primary hover:bg-primary/20 transition-colors">Generate</button>
                            </div>
                            <Progress size='xs' isIndeterminate className="flex-grow rounded-lg mt-2"/>

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
        </div>

    );
};

export default Text_to_Image;

