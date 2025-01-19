// src/app/Components/Preloader.js
"use client";

import React, { useEffect, useState } from 'react';
import '@lottiefiles/lottie-player';

const Preloader = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onFinish();
        }, 3000); // Adjust the duration as needed

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff', // Adjust background color as needed
            zIndex: 1000,
        }}>
            <lottie-player
                src="/animations/Preloader.json" // Adjust the path to your Lottie file
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '100%' }}
                loop
                autoplay>
            </lottie-player>
        </div>
    );
};

export default Preloader;