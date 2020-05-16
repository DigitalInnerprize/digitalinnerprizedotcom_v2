import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, config } from 'react-spring';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { AnimatedH2, AnimatedP } from '../styled/type.tsx';
import { useMediaQuery } from '../../hooks/useMediaQuery.ts';
import animatedJson from '../../images/animated/communication-animated-illustration.json';
import AnimatedImage from '../animateImage';

const HomeAboutUs = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(50%,0,0)',
        config: config.molasses,
    });
    const breakpoint = useMediaQuery('(min-width: 921px)');

    return (
        <section className="home-about">
            <div className="container">
                <Flex columnMobile>
                    <Waypoint
                        bottomOffset="15%"
                        onEnter={() => {
                            if (!on) toggle(true);
                        }}
                    />
                    <FlexItem
                        order={breakpoint && 1}
                        textRight={breakpoint}
                        alignCenter
                        paddingLeft={breakpoint ? 'md' : 'lg2'}
                        paddingRight={breakpoint ? 'md' : 'lg2'}
                    >
                        <AnimatedH2 style={animation} size="h2" marginBottom="0" capitalize fontWeight={700}>
                            about us
                        </AnimatedH2>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam fuga
                            distinctio minus quam id repellendus quos ea veritatis excepturi, eaque officia rerum ab
                            quod labore laboriosam dignissimos illo quasi!
                        </AnimatedP>
                    </FlexItem>
                    <FlexItem>
                        <div>
                            <AnimatedImage animatedJson={animatedJson} width={800} height={600} />
                        </div>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default HomeAboutUs;
