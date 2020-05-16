import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { AnimatedH1, AnimatedP } from '../styled/type.tsx';
import animatedJson from '../../images/animated/editing-animated-illustration.json';
import AnimatedImage from '../animateImage';
import { useViewport } from '../../context/viewport.tsx';
import { ButtonPrimary, ButtonText } from '../styled/button.tsx';

const WorkHero = () => {
    const { width } = useViewport();
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
        config: config.molasses,
    });
    const breakpoint = 922;
    return (
        <div className="work-page-heading">
            <div className="container">
                <Flex columnMobile>
                    <FlexItem alignCenter textLeft={width > breakpoint} flex={1}>
                        <Waypoint
                            onEnter={() => {
                                if (!on) toggle(true);
                            }}
                        />
                        <AnimatedH1 style={animation} size="h1" marginBottom="0" capitalize fontWeight={700}>
                            Work we've done
                        </AnimatedH1>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            Digital Innerprize has designed & built solutions for a range of clients, from startups to
                            multinational corporations. Check out some of our recent projects below.
                        </AnimatedP>
                        <a.div style={animation}>
                            <ButtonPrimary>
                                <ButtonText fontWeight="bold">Request a quote</ButtonText>
                            </ButtonPrimary>
                        </a.div>
                    </FlexItem>
                    <FlexItem flex={1}>
                        <AnimatedImage
                            animatedJson={animatedJson}
                            altText="about page image"
                            height={500}
                            width={500}
                        />
                    </FlexItem>
                </Flex>
            </div>
        </div>
    );
};

export default WorkHero;
