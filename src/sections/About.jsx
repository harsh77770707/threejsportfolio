import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import Globe from 'react-globe.gl';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('Kaloliyaharsh00@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                {/* Adrian Hajdin Intro Section */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid1.png"
                            alt="Adrian Hajdin - Developer"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <h2 className="grid-headtext">Hi, I’m Harsh</h2>
                            <p className="grid-subtext">
                                With 0 years of experience, I have honed my skills in both frontend
                                development, creating dynamic and responsive websites.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid2.png"
                            alt="Tech Stack Overview"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <h2 className="grid-headtext">Tech Stack</h2>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build
                                robust and scalable applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Remote Work Section */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 24, lng: -288, text: 'Im here', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <h2 className="grid-headtext">Flexible Communication & Work Locations</h2>
                            <p className="grid-subtext">
                                I&apos;m based in India, ahemedabad and open to remote work worldwide.
                            </p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Passion for Coding Section */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="assets/grid3.png"
                            alt="Passion for Coding"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <div>
                            <h2 className="grid-headtext">My Passion for Coding</h2>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just
                                my profession—it&apos;s my passion. I enjoy exploring new technologies and enhancing
                                my skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="assets/grid4.png"
                            alt="Contact Me"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <h2 className="grid-subtext text-center">Contact Me</h2>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt={hasCopied ? 'Copied' : 'Copy to clipboard'}
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    kaloliyaharsh00@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
