import React, { useState } from 'react';
import { Flex } from '../styled/flexBox.ts';
import { H2, H3 } from '../styled/type.tsx';
import { Waypoint } from 'react-waypoint';
import { useTrail, animated as a, config } from 'react-spring';
import Svg from '../Svg';
import Desktop from '../../images/svg/desktop.svg';
import Mobile from '../../images/svg/mobile.svg';
import Design from '../../images/svg/icon-design.svg';

const svgArray = [
    {
        title: 'app development',
        svg: Mobile,
    },
    {
        title: 'web development',
        svg: Desktop,
    },
    {
        title: 'ui / ux design',
        svg: Design,
    },
];

const HomeServices = () => {
    const [on, toggle] = useState(false);

    const trail = useTrail(svgArray.length, {
        opacity: on ? 1 : 0,
        transform: on ? 'scale(1)' : 'scale(0.3)',
        config: config.molasses,
    });

    return (
        <section className="home-services">
            <Waypoint
                bottomOffset="20%"
                onEnter={() => {
                    if (!on) toggle(true);
                }}
            />
            <div className="container">
                <H2 capitalize fontWeight={700}>
                    We specialize in
                </H2>
                <Flex className="services-list">
                    {trail.map((animation, index) => {
                        const { title, svg } = svgArray[index];
                        return (
                            <a.div key={title} style={animation}>
                                <Svg svg={svg} />
                                <H3 className="service-title" fontWeight={600}>
                                    {title}
                                </H3>
                            </a.div>
                        );
                    })}
                </Flex>
            </div>
        </section>
    );
};

export default HomeServices;
