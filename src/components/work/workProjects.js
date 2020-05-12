import React, { useContext } from 'react';
import { ProjectsContext } from '../../context/index';
import { useTrail, animated } from 'react-spring';
import { Card } from '../styled/card';

const WorkProjects = () => {
    const { projects } = useContext(ProjectsContext);
    const trail = useTrail(projects.length, {
        from: {
            opacity: 0,
            transform: 'scale(0.3)',
        },
        opacity: 1,
        transform: 'scale(1)',
    });

    if (!projects) {
        return null;
    }

    return (
        <div className="project-container">
            <div className="project-grid">
                {trail.map((animation, index) => {
                    const { url, name, mobile, imagePath, id, appLink } = projects[index];
                    return (
                        <animated.div style={animation} key={id}>
                            <Card url={url} name={name} mobile={mobile} imagePath={imagePath} appLink={appLink} />
                        </animated.div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkProjects;
