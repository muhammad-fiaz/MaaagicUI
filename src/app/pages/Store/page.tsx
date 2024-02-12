"use client";
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {Flex, Text, Button, Box, Tabs, ScrollArea, Heading} from '@radix-ui/themes';
import {Input} from "@chakra-ui/react";
import {MdInfo} from "react-icons/md";

interface Item {
    id: number;
    name: string;
    description: string;
    type: string;
    creator: {
        id: number;
        image: string;
        username: string;
    };
    modelVersions: {
        id: number;
        name: string;
        baseModel: string;
        baseModelType: string;
        description: string;
        files: {
            id: number;
            sizeKB: number;
            name: string;
            type: string;
            metadata: {
                fp: string;
                size: string;
                format: string;
            };
            downloadUrl: string;
            primary: boolean;
        }[];
        images: {
            id: number;
            url: any;
            nsfw: string;
            width: number;
            height: number;
            type: string;
            metadata: {
                hash: string;
                width: number;
                height: number;
            };
            meta: {
                Size: string;
                seed: number;
                Model: string;
                steps: number;
                hashes: {
                    model: string;
                };
                prompt: string;
                Version: string;
                sampler: string;
                cfgScale: number;
                resources: {
                    hash: string;
                    name: string;
                    type: string;
                }[];
            };
        }[];
        downloadUrl: string;
    }[];
}

interface ApiResponse {
    items: Item[];
    metadata: {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        nextPage: string | null;
    };
}

async function getData(url?: string): Promise<ApiResponse> {
    const res = await fetch(url || 'https://civitai.com/api/v1/models?limit=12&nsfw=false');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Store: React.FC = () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState<Item | null>(null);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getData();
                setData(responseData);
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []); // Empty dependency array to execute the effect only once

    const handleModelClick = (model: Item) => {
        setSelectedModel(model);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedModel(null);
    };

    const handlePrevPage = async () => {
        if (data?.metadata?.currentPage && data.metadata.currentPage > 1) {
            const prevPageUrl = data.metadata.nextPage?.replace(/page=\d+/, `page=${data.metadata.currentPage - 1}`);
            if (prevPageUrl) {
                try {
                    const prevPageData = await getData(prevPageUrl);
                    setData(prevPageData);
                } catch (error:any) {
                    console.error(error.message);
                }
            }
        }
    };

    const handleNextPage = async () => {
        if (data?.metadata?.nextPage) {
            try {
                const nextPageData = await getData(data.metadata.nextPage);
                setData(nextPageData);
            } catch (error:any) {
                console.error(error.message);
            }
        }
    };
    const openFilterModal = () => {
        setIsFilterModalOpen(true);
    };

    const closeFilterModal = () => {
        setIsFilterModalOpen(false);
    };
    const currentPage = data?.metadata?.currentPage ?? 1;
    const totalPages = data?.metadata?.totalPages ?? 1;

    return (
        <main>
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 container mx-auto p-4 justify-between">
                    <Flex align="center" gap="3">
                        <Input type="text" placeholder="Search" className="w-full rounded-full border border-primary/20 bg-primary/20 p-2 " />
                <Button
                    variant="soft"
                    className="ml-2 mb-2"
                    onClick={openFilterModal}

                >
                    Filter
                </Button>

                        <MdInfo className="text-primary text-2xl" />
                </Flex>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto p-4">

                    {data?.items.map((item) => (
                        <div key={item.id} className="mb-10" onClick={() => handleModelClick(item)}>
                            <img
                                src={item.modelVersions[0].images[0].url}
                                alt={`Image ${item.creator.username}`}
                                className="w-full h-48 object-cover rounded-lg cursor-pointer"
                            />
                            <p className="text-center mt-2 text-white">{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 mb-10">
                    <Flex align="center" gap="3">

                    <Button
                        variant="soft"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    >
                        Previous
                    </Button>
                    <Text className="text-primary text-lg gap-2">{`Page ${currentPage} of ${totalPages}`}</Text>

                    <Button
                        variant="soft"
                        onClick={handleNextPage}
                        disabled={!data?.metadata?.nextPage}
                        className={`ml-2 ${!data?.metadata?.nextPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    >
                        Next
                    </Button>
                    </Flex>
                </div>
            </div>

            {/* Filter Modal */}
            {isFilterModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="p-4 md:p-8 rounded-lg w-full md:max-w-md bg-secondary text-primary">
                            {/* Your filter options go here */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Filter Option 1</label>
                                <input type="radio" className="mr-2" />
                                <span>Option 1</span>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Filter Option 2</label>
                                <input type="radio" className="mr-2" />
                                <span>Option 2</span>
                            </div>
                            {/* Add more options as needed */}
                            <div className="flex justify-end">
                                <button onClick={closeFilterModal} className="mt-4 p-2 bg-blue-500 text-white rounded">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Model Versions */}
            {isModalOpen && selectedModel && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="p-4 md:p-8 rounded-lg w-full md:max-w-3xl bg-secondary  text-primary">
                            <Tabs.Root defaultValue="0" >
                                <ScrollArea type="always" scrollbars="horizontal"
                                            style={{overflowX: 'auto', whiteSpace: 'nowrap', gap: 15}}>

                                    <Tabs.List className="flex gap-4 overflow-x-auto">
                                        {selectedModel.modelVersions.map((version, index) => (
                                            <Tabs.Trigger
                                                key={index}
                                                value={index.toString()}
                                                className="px-4 py-2 bg-gray-800 text-white rounded cursor-pointer"
                                            >
                                                {selectedModel.modelVersions[index].files[0].name}
                                            </Tabs.Trigger>
                                        ))}
                                    </Tabs.List>
                                </ScrollArea>

                                <Box px="4" pt="3" pb="2">
                                    {selectedModel.modelVersions.map((version, index) => (
                                        <Tabs.Content key={index} value={index.toString()}>
                                            <div>
                                                <ScrollArea type="always" scrollbars="vertical" style={{height: 180}}>
                                                    <Box p="2" pr="8">
                                                        <Heading size="4" mb="2" trim="start">
                                                            Model information

                                                        </Heading>
                                                        <Flex direction="column" gap="4">

                                                            <div>
                                                                <h2>Model Name:{selectedModel.name}</h2>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    <strong>Creator Image:</strong>
                                                                    <img
                                                                        src={selectedModel.creator.image}
                                                                        alt="Creator Image"
                                                                        className="max-w-full h-auto"
                                                                        width={100}
                                                                        height={100}
                                                                    />
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <p>
                                                                    <strong>Version Description:</strong>
                                                                    <span
                                                                        className="break-words" // Add this class to break long words and prevent overflow
                                                                        dangerouslySetInnerHTML={{__html: selectedModel.modelVersions[index].description}}
                                                                    />
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    <strong>General Description:</strong>
                                                                    <span
                                                                        className="break-words" // Add this class to break long words and prevent overflow
                                                                        dangerouslySetInnerHTML={{__html: selectedModel.description}}
                                                                    />
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <p>
                                                                    <strong>Id:</strong> {selectedModel.id}
                                                                </p>
                                                                <p>
                                                                    <strong>Name:</strong> {selectedModel.name}
                                                                </p>
                                                                <p>
                                                                    <strong>Creator:</strong> {selectedModel.creator.username}
                                                                </p>

                                                                <p>
                                                                    <strong>File Id:</strong> {version.files[0].id}
                                                                </p>
                                                                <p>
                                                                    <strong>File
                                                                        Size:</strong> {version.files[0].sizeKB}
                                                                </p>
                                                                <p>
                                                                    <strong>File Name:</strong> {version.files[0].name}
                                                                </p>
                                                                <p>
                                                                    <strong>File Type:</strong> {version.files[0].type}
                                                                </p>
                                                                <p>
                                                                    <strong>File Type:</strong> {selectedModel.type}
                                                                </p>

                                                                <p>
                                                                    <strong>File
                                                                        Metadata:</strong> {version.files[0].metadata.format}
                                                                </p>
                                                                <div>
                                                                    <br/>
                                                                    <Button
                                                                        onClick={() => window.open(version.files[0].downloadUrl)} // Open in a new tab/window
                                                                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
                                                                    >
                                                                        Download
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Flex>

                                                    </Box>
                                                </ScrollArea>

                                            </div>
                                        </Tabs.Content>
                                    ))}
                                </Box>
                            </Tabs.Root>

                            <button onClick={closeModal} className="mt-4 p-2 bg-blue-500 text-white rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Store;
