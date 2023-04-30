// @imports
import { tabsListDefaultStyle } from '@/core/styled/themed/tabs';
import { styled } from '@/core/styled/web';

import { View } from '../view';
import { useTabsContext } from './tabs-context';
import type { TabsListProps } from './tabs.types';

// @exports
export const StyledTabsList = styled(View)<TabsListProps>`
  ${(props) => tabsListDefaultStyle({ ...props } as any)}
`;

export const TabsList: React.FC<TabsListProps> = (props) => {
  const { children, color, ...otherProps } = props;

  const tabsContextValue = useTabsContext();

  return (
    <StyledTabsList {...tabsContextValue} {...otherProps}>
      {children}
    </StyledTabsList>
  );
};
