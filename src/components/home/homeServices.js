import React, { useState } from 'react';
import { Link } from 'gatsby';
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
                <h2 className="sub-title">We specialize in</h2>
                <div className="services-list">
                    {trail.map((animation, index) => {
                        const { title, svg } = svgArray[index];
                        return (
                            <a.div key={title} style={animation}>
                                <Link to="/work" className="service-link">
                                    <Svg svg={svg} />
                                    <h3 className="service-title">{title}</h3>
                                </Link>
                            </a.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
