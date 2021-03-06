import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import projectData from '../data/projects.json';

const defaultState = {
    projects: [],
};

export const ProjectsContext = createContext(defaultState);

export function ProjectsProvider({ children }) {
    const [projects] = useState(projectData);

    return <ProjectsContext.Provider value={{ projects }}>{children}</ProjectsContext.Provider>;
}

ProjectsProvider.propTypes = {
    children: PropTypes.node,
};
