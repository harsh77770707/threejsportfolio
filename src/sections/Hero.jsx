import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader'; // Ensure this is defined
import { useMediaQuery } from 'react-responsive';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 1247 })
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-5 py-20" >
                <p className=" sm:text-3xl text-xl font-medium text-white font-generalsans ">
                    Hi, I am Harsh <span className="waving-hand">👋</span>
                </p>
                <p className="text-4xl underline font-bold  text-gray_gradient">Doing nothing, being useless.</p>
            </div>
            <div className="w-full h-full  absolute inset-0">
                <Canvas className="w-full h-full relative">
                    <Suspense fallback={<CanvasLoader />}>
                        {/* Add Three.js components inside the Canvas */}
                        <perspectiveCamera makeDefault position={[0, 0, 30]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={isMobile ? 0.06 : 0.09}
                                position={isMobile ? [0, -2.4, 0] : [0, -2.9, 0]}
                                rotation={[0, 3.1, 0]}
                            />
                        </HeroCamera>

                        <ambientLight intensity={1} />
                        <directionalLight position={[100, 100, 100]} intensity={1.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-10 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button  name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>

        </section>
    );
};

export default Hero;
