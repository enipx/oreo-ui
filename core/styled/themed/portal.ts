import { packageName } from '@/core/constants';
import { domExistsHandler } from '@/core/helpers/dom';

// @portal defaults
const portalClassName = `${packageName}-portal`;

export const portalDefaults = {
  className: portalClassName,
  selector: `.${portalClassName}`,
};

export const getPortalNode = () => {
  if (!domExistsHandler()) {
    return undefined;
  }

  return document.querySelector(portalDefaults.selector);
};

export const createPortalNode = () => {
  if (domExistsHandler() && !getPortalNode()) {
    const portalNode = document.createElement('div');
    portalNode.className = portalDefaults.className;

    document.body.append(portalNode);
  }
};
