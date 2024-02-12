"use client";
import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/navigation';
import settings from '@/../settings.json';

export default function SplashScreen() {
    const [showName, setShowName] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const audio = new Audio('/music/epic.mp3');
        audio.onloadedmetadata = () => {
            const audioDuration = audio.duration * 1000; // Convert duration to milliseconds
            const displayTime = audioDuration / 2; // Display at half the audio duration
            setTimeout(() => {
                setShowName(true);
                setTimeout(() => {
                    if (settings.authEnabled) {
                        router.push('/auth');
                    } else {
                        router.push('/pages/Maaagic_AI'); // Change to the appropriate route for settings
                    }
                }, audioDuration - displayTime); // Redirect after full audio duration
            }, 0); // Show name immediately
            audio.play(); // Start playing the audio
        };

        return () => {
            audio.pause(); // Pause audio when component unmounts
        };
    }, [router]);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Player
                autoplay
                src='/lottie/loading1.json'
                style={{ height: '300px', width: '300px' }}
            />
            {showName && (
                <div className="mt-4 animate-fade-in">
                    <h1 className="text-3xl font-bold text-center text-primary">
                        Maaagic Studios
                    </h1>
                </div>
            )}
        </div>
    );
}