// @imports
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.types';

import { domExistsHandler } from '@/core/helpers/dom';
import { portalDefaults } from '@/core/styled/themed/portal';

// @exports
export const Portal: React.FC<PortalProps> = (props) => {
  const { children, domNode: specifiedDomNode } = props;

  const portalNode = document.createElement('div');
  portalNode.className = portalDefaults.className;

  const domNode = specifiedDomNode || portalNode;

  useEffect(() => {
    if (domExistsHandler()) {
      document.body.append(portalNode);
    }
  }, []);

  if (!domExistsHandler()) {
    return null;
  }

  return createPortal(children, domNode);
};
