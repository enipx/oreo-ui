// @imports
import type { PackageTypes } from '../../constants/index.types';
import drawer from './drawer';
import modal from './modal';

// @file declarations
const components = (arg?: PackageTypes) => {
  return {
    modal: modal(arg),
    drawer: drawer(arg),
  };
};

// @exports
export default components;
