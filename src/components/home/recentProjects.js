import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring';
import { Link } from 'gatsby';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { AnimatedH2, AnimatedP } from '../styled/type.tsx';
import { ButtonPrimary, ButtonText } from '../styled/button.tsx';
import { useBreakpoint } from '../../context/breakpoint.tsx';

const RecentProjects = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
        config: config.molasses,
    });
    const breakpoint = useBreakpoint();

    return (
        <section className="home-recent-projects">
            <div className="container">
                <Flex columnMobile>
                    <FlexItem alignCenter textLeft={breakpoint.tablet}>
                        <Waypoint
                            bottomOffset="15%"
                            onEnter={() => {
                                if (!on) toggle(true);
                            }}
                        />
                        <AnimatedH2 style={animation} size="h2" marginBottom="0" capitalize fontWeight={700}>
                            recent projects
                        </AnimatedH2>
                        <AnimatedP style={animation} marginTop="md" color="gray2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptate totam, fugit illo
                            eos ratione suscipit aperiam eligendi expedita, illum quia. Odit dolorem sequi rerum p
                        </AnimatedP>
                        <a.div style={animation}>
                            <Link to="/work">
                                <ButtonPrimary>
                                    <ButtonText fontWeight="bold">See our work</ButtonText>
                                </ButtonPrimary>
                            </Link>
                        </a.div>
                    </FlexItem>
                    <FlexItem>
                        <div className="box">
                            <img src="/ubisoft.png" alt="ubisoft" />
                        </div>
                        <div className="box">
                            <img src="/endpointclosing.png" alt="endpoint closing" />
                        </div>
                        <div className="box">
                            <img src="/makena.png" alt="developer coding" />
                        </div>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default RecentProjects;
