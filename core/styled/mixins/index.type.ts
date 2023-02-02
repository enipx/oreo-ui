import { PackageTypes } from '../../constants/index.types';
import { BreakpointsObjectKeys } from '../../theme/utilities/breakpoints';

export type MediaStylesSizeTypes = BreakpointsObjectKeys;

export type MediaStylesStyleTypes = string;

export type MediaStylesTypes = {
  packageType?: PackageTypes;
};
