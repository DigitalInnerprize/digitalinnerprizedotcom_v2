import React from 'react'
import { FilterProvider } from './filter';


function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<FilterProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
