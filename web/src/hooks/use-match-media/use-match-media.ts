// @imports

import { domExistsHandler } from '@/core/helpers/dom';
import {
  BreakpointsObjectKeys,
  getBreakpoints,
} from '@/core/theme/utilities/breakpoints';
import { useEffect, useState } from 'react';

// @types
export type UseMatchMediaOptionType = {
  query?: string;
  above?: BreakpointsObjectKeys;
  below?: BreakpointsObjectKeys;
  initialValue?: boolean;
};

// @utilities
export const getMediaQuery = (options: UseMatchMediaOptionType) => {
  const { query, above, below } = options;

  const breakpoints = getBreakpoints('web');

  if (query) {
    return query;
  }

  if (above) {
    const breakpoint = breakpoints[above];

    return `(min-width: ${breakpoint})`;
  }

  if (below) {
    const breakpoint = breakpoints[below];

    return `(max-width: ${breakpoint})`;
  }

  return '';
};

// @exports
export const useMatchMedia = (options: UseMatchMediaOptionType) => {
  const { query, above, below, initialValue } = options;

  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    // check if dom exist
    const mediaQuery = getMediaQuery(options);

    if (domExistsHandler() && mediaQuery) {
      // initialize listener
      const matchesListener = (_res: MediaQueryListEvent | MediaQueryList) => {
        setMatches(_res.matches);
      };

      const media = window.matchMedia(mediaQuery);

      // update result
      matchesListener(media);

      media.addEventListener('change', matchesListener);

      return () => {
        media.removeEventListener('change', matchesListener);
      };
    }
  }, [query, above, below]);

  return { matches };
};
