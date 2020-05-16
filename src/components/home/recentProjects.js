import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated as a, config } from 'react-spring';
import { Link } from 'gatsby';
import { AnimatedH2, AnimatedP } from '../styled/type.tsx';
import { ButtonPrimary, ButtonText } from '../styled/button.tsx';
import { useMediaQuery } from '../../hooks/useMediaQuery.ts';

const RecentProjects = () => {
    const [on, toggle] = useState(false);
    const animation = useSpring({
        opacity: on ? 1 : 0,
        transform: on ? 'translate3d(0,0,0)' : 'translate3d(-50%,0,0)',
        config: config.molasses,
    });

    return (
        <section className="home-recent-projects">
            <div className="container">
                <div className="recent-projects-content">
                    <div className="left">
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
                    </div>
                    <div className="right">
                        <div className="column-left projects-column">
                            <div className="box">
                                <img src="/web-development.png" alt="developer coding" />
                            </div>
                            <div className="box">
                                <img src="/web-development.png" alt="developer coding" />
                            </div>
                        </div>
                        <div className="column-right project-column">
                            <div className="box">
                                <img src="/web-development.png" alt="developer coding" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
