// @imports
import React, { useEffect, useState } from 'react';
import { getWidowLayout } from '../../helpers/base';
import type {
  ShowProps,
  HideProps,
  UseMatchLayoutOptionType,
} from './show-hide.types';

// @exports
export const useMatchLayout = (options: UseMatchLayoutOptionType) => {
  const { above, below, initialValue } = options;

  const [matches, setMatches] = useState(initialValue);

  const { width } = getWidowLayout();

  useEffect(() => {
    // check if dom exist
    if (above) {
      const res = width > above;
      setMatches(res);
    }

    if (below) {
      const res = width < below;
      setMatches(res);
    }
  }, [width, above, below]);

  return { matches };
};

export const Show = (props: ShowProps) => {
  const { children, above, below } = props;

  const { matches } = useMatchLayout({
    above,
    below,
  });

  if (!matches) {
    return null;
  }

  return <>{children}</>;
};

export const Hide = (props: HideProps) => {
  const { children, above, below } = props;

  const { matches } = useMatchLayout({
    above,
    below,
  });

  if (matches) {
    return null;
  }

  return <>{children}</>;
};
