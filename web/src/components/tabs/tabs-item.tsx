// @imports
import { useEffect } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsItemProps, TabsProps } from './tabs.types';
import { useTabs } from './use-tabs';

import {
  tabsItemDefaultStyle,
  tabsItemVariantStyle,
} from '@/core/styled/themed/tabs';
import { baseStyled, styled } from '@/core/styled/web';

// @exports
export const StyledTabsItem = styled(baseStyled('button'))<TabsProps>`
  ${(props) => tabsItemDefaultStyle({ ...props } as any)}
  ${(props) => tabsItemVariantStyle({ ...props } as any)}
`;

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const tabsContextValue = useTabsContext();

  const { children, value = '', disabled } = props;

  const { isActive } = useTabs({
    item: value,
    ...tabsContextValue,
  });

  const onClickHandler = () => {
    if (!disabled) {
      tabsContextValue?.updateValue?.(value);
    }
  };

  useEffect(() => {
    tabsContextValue?.storeValues?.(value);
  }, []);

  useEffect(() => {
    if (
      tabsContextValue?.allValues &&
      tabsContextValue?.allValues?.length > 0 &&
      !tabsContextValue?.value
    ) {
      tabsContextValue?.updateValue?.(tabsContextValue?.allValues[0]);
    }
  }, [tabsContextValue?.allValues]);

  return (
    <StyledTabsItem
      role="tab"
      aria-selected={isActive}
      onClick={onClickHandler}
      {...tabsContextValue}
      isActive={isActive}
      disabled={disabled}>
      {children}
    </StyledTabsItem>
  );
};
