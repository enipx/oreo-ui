// @imports
import React from 'react';

import { View } from '../view';
import { useTabsContext } from './tabs-context';
import type { TabsListProps } from './tabs.types';

import { tabsListDefaultStyle } from '@oreo-ui/core/dist/styled/themed/tabs';
import { styled } from '@oreo-ui/core/dist/styled/web';

// @exports
export const StyledTabsList = styled(View)<TabsListProps>`
  ${(props) => tabsListDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const TabsList: React.FC<TabsListProps> = (props) => {
  const { children, ...otherProps } = props;

  const tabsContextValue = useTabsContext();

  return (
    <StyledTabsList {...tabsContextValue} {...otherProps}>
      {children}
    </StyledTabsList>
  );
};
