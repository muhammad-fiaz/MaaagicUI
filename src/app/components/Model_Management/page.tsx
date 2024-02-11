"use client";
import {Box, Flex, Tabs} from "@radix-ui/themes";
interface ModelManagementProps {
    progress: number | null;
    speed: string | null;
}
export default function ModelManagement() {
    return (
        <div className="mt-10">
            <Flex direction="column" gap="4">
                <Tabs.Root defaultValue="models">
                    <Tabs.List size="2">
                        <Tabs.Trigger value="models">Models</Tabs.Trigger>
                        <Tabs.Trigger value="downloads">Downloads</Tabs.Trigger>
                        <Tabs.Trigger value="process">Process</Tabs.Trigger>
                        <Tabs.Trigger value="files">Files</Tabs.Trigger>
                    </Tabs.List>

                    <Box px="2" pt="2" pb="2">
                        <Tabs.Content value="models">
                            <h3>Models</h3>
                        </Tabs.Content>

                        <Tabs.Content value="downloads">
                            <h2>Downloads</h2>
                        </Tabs.Content>

                        <Tabs.Content value="process">
                            <h2>Process</h2>
                        </Tabs.Content>

                        <Tabs.Content value="files">
                            <h2>Files</h2>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Flex>
        </div>
    );
}
