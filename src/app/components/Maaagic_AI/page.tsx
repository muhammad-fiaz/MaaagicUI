// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import { MdOutlineRefresh } from "react-icons/md";
import Notification from "@/components/Notification";
interface Message {
    text: string;
    type: string;
    animate?: boolean;
}

const MaaagicAI = () => {
    const initialBotMessage = "Hello! How can I help you?";
    const [messages, setMessages] = useState<Message[]>([{ text: initialBotMessage, type: "bot" }]);
    const [inputText, setInputText] = useState("");
    const [initialBotMessageVisible, setInitialBotMessageVisible] = useState(true);

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        const chatContainer = document.getElementById("chatContainer");
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (inputText.trim() === "") return;

        // Add user's message with animation
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: inputText, type: "user", animate: true },
        ]);

        // Simulate bot response (replace with actual chatbot logic) with typing animation
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Bot is typing...", type: "bot", animate: true },
        ]);

        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages.slice(0, -1), // Remove the "Bot is typing..." message
                { text: "I'm just a simple chatbot. Ask me anything!", type: "bot", animate: true },
            ]);
        }, 1500);

        setInputText(""); // Clear input after sending
    };

    const handleClearAll = () => {
        // Clear all messages and reset to initial bot message
        setMessages([{ text: initialBotMessage, type: "bot" }]);
    };

    return (
        <div className="flex flex-col items-center justify-between h-screen bg-secondary  ">

            <Notification id={1} message="This is a notification" timeout={false} />
            {/* Chat Container */}
            <div
                id="chatContainer"
                className="bg-secondary p-4 rounded-lg shadow-md mt-4 flex-grow max-h-[calc(100vh-120px)] h-screen scrollbar-none scroll-smooth overflow-y-auto   w-full justify-center items-center md:w-2/3 lg:w-1/2 "
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${
                            message.type === "bot" ? "text-primary" : "text-primary"
                        }`}
                    >
                        <div
                            className={`flex items-start animate-slide-in-${
                                message.animate ? "up" : "down"
                            }`}
                        >
                            {message.type === "bot" && (
                                <img
                                    src="https://placekitten.com/40/40" // Replace with actual bot profile image
                                    alt="Bot"
                                    className="rounded-full w-8 h-8 mr-2"
                                />
                            )}
                            {message.type === "user" && (
                                <img
                                    src="https://placekitten.com/40/40" // Replace with actual user profile image
                                    alt="User"
                                    className="rounded-full w-8 h-8 mr-2"
                                />
                            )}
                            <div className={message.type === "bot" ? "font-bold" : ""}>
                                {message.text}
                            </div>
                        </div>
                        <div className="border-t border-primary/20 mt-3 pt-3">
                            {/* Margin line between messages */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <Flex align="center" gap="3" className="w-2/3 md:w-2/3 lg:w-1/2 p-4 bg-secondary   fixed bottom-0">
                <Button
                    variant="outline"
                    className="bg-transparent text-secondary rounded-full"
                    onClick={handleClearAll}
                >
                    <MdOutlineRefresh className="text-2xl" />
                </Button>
                <TextArea
                    className="bg-secondary rounded-full shadow-md flex-grow max-h-screen overflow-y-auto"
                    placeholder={"Enter your text here"}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                ></TextArea>
                <Button
                    variant="outline"
                    className="bg-transparent text-secondary"
                    onClick={handleSendMessage}
                >
                    <IoMdPaperPlane />
                </Button>
            </Flex>
        </div>
    );
};

export default MaaagicAI;
