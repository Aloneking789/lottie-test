
// import withLayout from "./HOC/withLayout";
// import HeroBanner from "./landingPage/HeroBanner";
// import './page.module.css'
// import LockedScrollParagraph from './landingPage/LockedScrollParagraph'
// import WavySection from './Components/WavySection'
// import WhatWeDoSection from './landingPage/WhatWeDoSection'

// const text = `Wottl is your partner in growth. We craft bold 
// strategies, creative campaigns, and measurable results that make brands thrive online. From startups to industry leaders, we work with those who aim to lead`

// const paraStyle = {
//   fontFamily: "Gabarito",
//   fontSize: "5rem",
//   fontStyle: "normal",
//   fontWeight: 600,
//   lineHeight: "normal",
//   letterSpacing: "-0.77px",
//   width: '100%',
// };
// function Home() {
//   return (
//     <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//       <HeroBanner/>
//       <div style = {{ display: 'flex' , alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '122vh', background: 'linear-gradient(180deg, #094F4D 0%, #101B1A 35%)', rowGap: '9.25vh'}}>
//         <WavySection color='#F4F4F4'>
//           WHO WE ARE
//         </WavySection>
//         <LockedScrollParagraph
//           text={text}
//           style={paraStyle}
//           threshold={0.4} // adjust if needed
//           rootMargin={"-10% 0px -25% 0px"}
//         />
//       </div>
//       <div style={{marginTop: '32.4vh'}}/>
//       <WavySection color='#CE523A'>
//         WHAT WE DO
//       </WavySection>
    
//       <WhatWeDoSection/>

//       <HeroBanner/>

//     </div>
//   );
// }

// export default withLayout(Home);

// src/app/page.js
"use client";

import React, { useState } from 'react';
import withLayout from "./HOC/withLayout";
import HeroBanner from "./landingPage/HeroBanner";
import './page.module.css';
import LockedScrollParagraph from './landingPage/LockedScrollParagraph';
import WavySection from './Components/WavySection';
import WhatWeDoSection from './landingPage/WhatWeDoSection';
import Preloader from './Components/Preloader';

const text = `Wottl is your partner in growth. We craft bold 
strategies, creative campaigns, and measurable results that make brands thrive online. From startups to industry leaders, we work with those who aim to lead`;

const paraStyle = {
    fontFamily: "Gabarito",
    fontSize: "5rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "-0.77px",
    width: '100%',
};

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
            {!isLoading && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <HeroBanner />
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '122vh', background: 'linear-gradient(180deg, #094F4D 0%, #101B1A 35%)', rowGap: '9.25vh' }}>
                        <WavySection color='#F4F4F4'>
                            WHO WE ARE
                        </WavySection>
                        <LockedScrollParagraph
                            text={text}
                            style={paraStyle}
                            threshold={0.4} // adjust if needed
                            rootMargin={"-10% 0px -25% 0px"}
                        />
                    </div>
                    <div style={{ marginTop: '32.4vh' }} />
                    <WavySection color='#CE523A'>
                        WHAT WE DO
                    </WavySection>
                    <WhatWeDoSection />
                    <HeroBanner />
                </div>
            )}
        </>
    );
}

export default withLayout(Home);