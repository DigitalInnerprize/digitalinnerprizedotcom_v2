import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, config } from 'react-spring';
import { AnimatedH2, AnimatedP } from '../styled/type.tsx';
import animatedJson from '../../images/animated/designing-male-animated.json';
import AnimatedImage from '../animateImage';

const HomeAboutUs = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
        config: config.molasses,
    });
    return (
        <section className="home-about">
            <div className="container">
                <div className="home-about-content">
                    <div className="home-about-text">
                        <Waypoint
                            bottomOffset="15%"
                            onEnter={() => {
                                if (!on) toggle(true);
                            }}
                        />
                        <AnimatedH2 style={animation} size="h2" marginBottom="0" capitalize fontWeight={700}>
                            about us
                        </AnimatedH2>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam fuga
                            distinctio minus quam id repellendus quos ea veritatis excepturi, eaque officia rerum ab
                            quod labore laboriosam dignissimos illo quasi!
                        </AnimatedP>
                    </div>
                    <div className="home-about-image">
                        <AnimatedImage animatedJson={animatedJson} width={800} height={600} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutUs;
