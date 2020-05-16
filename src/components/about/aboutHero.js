import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { AnimatedH1, AnimatedP } from '../styled/type.tsx';
import { ButtonPrimary, ButtonText } from '../styled/button.tsx';
import { useBreakpoint } from '../../context/breakpoint.tsx';
import AnimatedImage from '../animateImage';
import animatedJson from '../../images/animated/home-office-animated-illustration.json';

const AboutHero = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
        config: config.molasses,
    });
    const breakpoint = useBreakpoint();

    return (
        <div className="about-page-heading">
            <div className="container">
                <Flex columnMobile>
                    <FlexItem
                        alignCenter
                        textLeft={breakpoint.tablet}
                        flex={1}
                        paddingLeft={breakpoint.mobile ? 'lg2' : 'md'}
                        paddingRight={breakpoint.mobile ? 'lg2' : 'md'}
                    >
                        <Waypoint
                            onEnter={() => {
                                if (!on) toggle(true);
                            }}
                        />
                        <AnimatedH1 style={animation} size="h1" marginBottom="0" capitalize fontWeight={700}>
                            Hi from Digital Innerprize
                        </AnimatedH1>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            We think smart businesses and entrepreneurs must fully embrace modern ways of reaching their
                            customers to succeed in today’s crowded marketplace your customers are online… and you need
                            to meet them there.
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
                            width={breakpoint.tablet && 500}
                            height={breakpoint.tablet ? 550 : 500}
                        />
                    </FlexItem>
                </Flex>
            </div>
        </div>
    );
};

export default AboutHero;
