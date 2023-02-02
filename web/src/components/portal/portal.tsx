// @imports
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.types';

import { domExistsHandler } from '@/core/helpers/dom';
import { createPortalNode, getPortalNode } from '@/core/styled/themed/portal';

// @exports
export const Portal: React.FC<PortalProps> = (props) => {
  const { children, domNode: specifiedDomNode } = props;

  const portalNode = getPortalNode();

  const domNode = specifiedDomNode || portalNode || document.body;

  useEffect(() => {
    if (domExistsHandler()) {
      createPortalNode();
    }
  }, []);

  if (!domExistsHandler()) {
    return null;
  }

  return createPortal(children, domNode);
};
