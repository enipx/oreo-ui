import { packageName } from '@/core/constants';

// @portal defaults
const portalClassName = `${packageName}-portal`;

export const portalDefaults = {
  className: portalClassName,
  selector: `.${portalClassName}`,
};

export const getPortalNode = () => {
  return document.querySelector(portalDefaults.selector);
};

export const createPortalNode = () => {
  if (!getPortalNode()) {
    const portalNode = document.createElement('div');
    portalNode.className = portalDefaults.className;

    document.body.append(portalNode);
  }
};
