import { isPackageNative } from '../../helpers/base';
import { getDimensionsUnitHandler } from '../../helpers/layout';
import { breakpointsObject as breakpoints } from '../../theme/utilities/breakpoints';
import type {
  MediaStylesTypes,
  MediaStylesSizeTypes,
  MediaStylesStyleTypes,
} from './index.type';

export const mediaQueryStyle = (
  key: MediaStylesSizeTypes,
  style: MediaStylesStyleTypes,
  options?: MediaStylesTypes
) => {
  const packageType = options?.packageType || 'web';

  const breakpoint = isPackageNative(packageType)
    ? breakpoints[key]
    : getDimensionsUnitHandler(breakpoints[key]).rem;

  return `
    @media screen and (min-width: ${breakpoint}) {
      ${style}
    }
  `;
};
