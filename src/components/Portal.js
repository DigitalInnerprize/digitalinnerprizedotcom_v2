import { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null;

const Portal = ({ children }) => {
    const el = typeof document !== `undefined` ? document.createElement('div') : null;

    useEffect(() => {
        portalRoot.appendChild(el);
        return () => {
            portalRoot.removeChild(el);
        };
    }, [el]);

    // Check that this.el is not null before using ReactDOM.createPortal
    if (el) {
        return ReactDOM.createPortal(children, el);
    } else {
        return null;
    }
};

export default Portal;
