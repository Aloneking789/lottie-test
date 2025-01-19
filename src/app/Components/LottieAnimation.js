// src/app/Components/LottieAnimation.js
import React from 'react';
import '@lottiefiles/lottie-player';

const LottieAnimation = ({ src, width = 300, height = 300 }) => {
    return (
        <lottie-player
            src={src}
            background="transparent"
            speed="1"
            style={{ width: `${width}px`, height: `${height}px` }}
            loop
            autoplay>
        </lottie-player>
    );
};

export default LottieAnimation;