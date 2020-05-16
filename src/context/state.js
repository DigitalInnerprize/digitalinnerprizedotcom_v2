import React from 'react';
import { ProjectsProvider } from './projects';
import { ViewportProvider } from './viewport.tsx';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
                children: kids,
            }),
        children,
    );
}

function ContextProvider({ children }) {
    return <ProviderComposer contexts={[<ViewportProvider />, <ProjectsProvider />]}>{children}</ProviderComposer>;
}

export { ContextProvider };
