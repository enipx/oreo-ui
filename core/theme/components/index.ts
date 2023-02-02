// @imports
import type { PackageTypes } from '../../constants/index.types';
import modal from './modal';

// @file declarations
const components = (arg?: PackageTypes) => {
  return {
    modal: modal(arg),
  };
};

// @exports
export default components;
