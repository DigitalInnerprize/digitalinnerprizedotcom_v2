import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, config } from 'react-spring';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { AnimatedH2, AnimatedP } from '../styled/type.tsx';
import { useBreakpoint } from '../../context/breakpoint.tsx';
import animatedJson from '../../images/animated/communication-animated-illustration.json';
import AnimatedImage from '../animateImage';

const HomeAboutUs = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
        config: config.molasses,
    });
    const breakpoint = useBreakpoint();

    return (
        <section className="home-about">
            <div className="container">
                <Flex columnMobile marginTop="lg">
                    <Waypoint
                        bottomOffset="15%"
                        onEnter={() => {
                            if (!on) toggle(true);
                        }}
                    />
                    <FlexItem
                        order={breakpoint.tablet && 1}
                        textRight={breakpoint.tablet}
                        alignCenter
                        paddingLeft={breakpoint.mobile ? 'lg2' : 'md'}
                        paddingRight={breakpoint.mobile ? 'lg2' : 'md'}
                    >
                        <AnimatedH2 style={animation} size="h2" marginBottom="0" capitalize fontWeight={700}>
                            what we do
                        </AnimatedH2>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam fuga
                            distinctio minus quam id repellendus quos ea veritatis excepturi, eaque officia rerum ab
                            quod labore laboriosam dignissimos illo quasi!
                        </AnimatedP>
                    </FlexItem>
                    <FlexItem>
                        <div>
                            <AnimatedImage
                                animatedJson={animatedJson}
                                width={breakpoint.tablet && 600}
                                height={breakpoint.tablet ? 600 : 525}
                            />
                        </div>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default HomeAboutUs;
