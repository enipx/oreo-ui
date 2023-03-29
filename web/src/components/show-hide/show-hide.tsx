// @imports
import { useMatchMedia } from '../../hooks';
import type { ShowProps, HideProps } from './show-hide.types';

// @exports
export const Show = (props: ShowProps) => {
  const { children, breakpoint, above, below } = props;

  const { matches } = useMatchMedia({
    query: breakpoint,
    above,
    below,
  });

  if (!matches) {
    return null;
  }

  return <>{children}</>;
};

export const Hide = (props: HideProps) => {
  const { children, breakpoint, above, below } = props;

  const { matches } = useMatchMedia({
    query: breakpoint,
    above,
    below,
  });

  if (matches) {
    return null;
  }

  return <>{children}</>;
};
