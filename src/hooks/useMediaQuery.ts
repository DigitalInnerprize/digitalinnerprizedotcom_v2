import { useEffect, useState } from 'react';
import { window } from 'browser-monads';

/**
 * @param query String - format must be as if css media-query: '(max-width: 768px)'
 */
export const useMediaQuery = (query: string) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });
    return matches;
};
