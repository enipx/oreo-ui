// @imports
import { domExistsHandler } from '@oreo-ui/core/dist/helpers/dom';
import {
  createPortalNode,
  getPortalNode,
} from '@oreo-ui/core/dist/styled/themed/portal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.types';

// @exports
export const Portal: React.FC<PortalProps> = (props) => {
  const { children, domNode: specifiedDomNode } = props;

  const portalNode = getPortalNode();

  useEffect(() => {
    createPortalNode();
  }, []);

  if (!domExistsHandler()) {
    return null;
  }

  const domNode = specifiedDomNode || portalNode || document?.body;

  return createPortal(children, domNode);
};
