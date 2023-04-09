// @imports
import { useEffect, memo } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsItemProps } from './tabs.types';
import { useTabs } from './use-tabs';

import {
  tabsItemDefaultStyle,
  tabsItemVariantStyle,
  tabsItemCustomStyle,
} from '@/core/styled/themed/tabs';
import { baseStyled, styled } from '@/core/styled/web';

// @exports
export const StyledTabsItem = styled(baseStyled('button'))<any>`
  ${(props) => tabsItemDefaultStyle({ ...props } as any)}
  ${(props) => tabsItemVariantStyle({ ...props } as any)}
  ${(props) => tabsItemCustomStyle({ ...props } as any)}
`;

export const TabsItem = memo((props: TabsItemProps) => {
  const tabsContextValue = useTabsContext();

  const { children, value = '', disabled, ...otherProps } = props;

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
      tabsContextValue?.updateValue?.(tabsContextValue?.allValues[0], {
        onMounted: true,
      });
    }
  }, [tabsContextValue?.allValues]);

  return (
    <StyledTabsItem
      role="tab"
      aria-selected={isActive}
      onClick={onClickHandler}
      {...tabsContextValue}
      isActive={isActive}
      disabled={disabled}
      {...otherProps}>
      {children}
    </StyledTabsItem>
  );
});
