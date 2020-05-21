import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring';
import { Link } from 'gatsby';
import { Flex, FlexItem } from '../styled/flexBox.ts';
import { Grid, GridItem } from '../styled/grid.ts';
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
                    <FlexItem
                        flex={1}
                        alignCenter
                        textLeft={breakpoint.desktop}
                        paddingLeft={breakpoint.mobile ? 'lg' : 'md'}
                        paddingRight={breakpoint.mobile ? 'lg' : 'md'}
                    >
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
                            As an agency of life long learners, We combine my creativity, coding skills, and passion for
                            development to create eye candy solutions for web and mobile applications. Focusing on user
                            experience we aim to develop interfaces that are accessible to all.
                        </AnimatedP>
                        <a.div style={animation}>
                            <Link to="/work">
                                <ButtonPrimary>
                                    <ButtonText fontWeight="bold">See our work</ButtonText>
                                </ButtonPrimary>
                            </Link>
                        </a.div>
                    </FlexItem>
                    <FlexItem
                        flex={1.5}
                        paddingLeft={'md'}
                        paddingRight={'md'}
                        marginTop={breakpoint.maxTablet && 'lg'}
                    >
                        <Grid gap="20px" templateColumns="1fr" autoRows="minmax(100px, auto)">
                            <GridItem>
                                <div className="box">
                                    <img src="/ubisoft.png" alt="ubisoft" />
                                </div>
                            </GridItem>
                            <GridItem>
                                <div className="box">
                                    <img src="/makena.png" alt="developer coding" />
                                </div>
                            </GridItem>
                        </Grid>
                    </FlexItem>
                </Flex>
            </div>
        </section>
    );
};

export default RecentProjects;
