"use client";
import { Box, Button, Flex, Tabs } from "@radix-ui/themes";
import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface ImageDisplayProps {
    imageUrl: string | null;
    altText: string;
}

const Text_to_Image: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);


    return (
        <div className="mt-10">
            <Tabs.Root defaultValue="generate">
                <Tabs.List>
                    <Tabs.Trigger value="generate">Generate</Tabs.Trigger>
                    <Tabs.Trigger value="gallery">Gallery</Tabs.Trigger>
                    <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                </Tabs.List>

                <Box px="4" pt="3" pb="2">
                    <Tabs.Content value="generate">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-1 container h-1/2 w-screen relative border border-primary/20 bg-secondary rounded-lg">
                                <img src='/maaagicstudios.jpg' alt={'generated image'} className='h-full w-full object-cover'/>
                            </div>

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
