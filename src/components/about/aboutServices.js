import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Waypoint } from 'react-waypoint';
import { useTrail, animated as a, config } from 'react-spring';
import { H2, H3, P } from '../styled/type.tsx';
import Svg from '../Svg';
import Desktop from '../../images/svg/desktop.svg';
import Mobile from '../../images/svg/mobile.svg';
import Design from '../../images/svg/icon-design.svg';
import Chart from '../../images/svg/chart.svg';
import Launch from '../../images/svg/launch.svg';

const svgArray = [
    {
        title: 'app development',
        paragraph: `We design & develop mobile apps for iPhone, iPad, and Android devices. Our apps have been downloaded over 500,000+ times!`,
        svg: Mobile,
    },
    {
        title: 'web development',
        paragraph: `We build responsive websites and web applications, from simple sites to online stores and social networks - our team has done it all.`,
        svg: Desktop,
    },
    {
        title: 'ui / ux design',
        paragraph: `We provide UX & UI design for all our projects, or as a standalone service. This includes wireframes, mockups, prototypes, and more.`,
        svg: Design,
    },
    {
        title: 'working with startups',
        paragraph: `We love working with startups, working closely with them to turn ideas into reality, whether its a new app or a web platform or both.`,
        svg: Launch,
    },
    {
        title: 'brand identity design',
        paragraph: `We design custom logos and brand identity for companies just starting out or in need of a refresh. From style-guides to stationery.`,
        svg: Chart,
    },
];

const HomeServices = () => {
    const [on, toggle] = useState(false);

    const trail = useTrail(svgArray.length, {
        opacity: on ? 1 : 0,
        transform: on ? 'scale(1)' : 'scale(0.3)',
        config: config.gentle,
    });

    return (
        <section className="about-page-services">
            <div className="container">
                <Waypoint
                    onEnter={() => {
                        if (!on) toggle(true);
                    }}
                />
                <div className="about-services">
                    <H2 size="h2" capitalize fontWeight={700} marginBottom="sm">
                        What we do
                    </H2>
                    <div className="services-list">
                        {trail.map((animation, index) => {
                            const { title, svg, paragraph } = svgArray[index];
                            return (
                                <a.div key={title} style={animation}>
                                    <Link to="/work">
                                        <div className="service-link">
                                            <Svg svg={svg} />
                                            <div className="service-link-content">
                                                <H3 size="h3" capitalize fontWeight={600} marginBottom="0">
                                                    {title}
                                                </H3>
                                                <P marginTop="0" color="gray2">
                                                    {paragraph}
                                                </P>
                                            </div>
                                        </div>
                                    </Link>
                                </a.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
