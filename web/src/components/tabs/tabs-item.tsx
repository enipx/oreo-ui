// @imports
import {
  tabsItemDefaultStyle,
  tabsItemVariantStyle,
  tabsItemCustomStyle,
} from '@/core/styled/themed/tabs';
import { allStyle } from '@/core/styled/system';
import { baseStyled, styled } from '@/core/styled/web';
import { useEffect, memo } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsItemProps } from './tabs.types';
import { useTabs } from './use-tabs';
import { componentDefaultStyle } from '@/core/styled/themed/base';

// @exports
export const StyledTabsItem = styled(baseStyled('button'))<any>`
  ${(props) => tabsItemDefaultStyle({ ...props } as any)}
  ${(props) => tabsItemVariantStyle({ ...props } as any)}

  ${allStyle()}
  
  ${(props) => tabsItemCustomStyle({ ...props } as any)}

  ${(props) => componentDefaultStyle({ ...props } as any)}
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
      {...otherProps}
      isActive={isActive}
      disabled={disabled}>
      {children}
    </StyledTabsItem>
  );
});
