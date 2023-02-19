// @imports
import React, { useEffect } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsItemProps, TabsProps } from './tabs.types';
import { useTabs } from './use-tabs';

import {
  tabsItemDefaultStyle,
  tabsItemVariantStyle,
  tabsItemCustomStyle,
  tabsItemTextDefaultStyle,
} from '@/core/styled/themed/tabs';
import { styled } from '@/core/styled/native';
import { BaseButton } from '../button';
import { Text } from '../text';

// @exports
export const StyledTabsItem = styled(BaseButton)<TabsProps>`
  /* ${(props) => tabsItemDefaultStyle({ ...props, type: 'native' } as any)}
  ${(props) => tabsItemVariantStyle({ ...props, type: 'native' } as any)}
  ${(props) => tabsItemCustomStyle({ ...props, type: 'native' } as any)} */
`;

export const StyledTabsItemText = styled(Text)<TabsProps>`
  ${(props) => tabsItemTextDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const tabsContextValue = useTabsContext();

  const { children, value = '', disabled, title, ...otherProps } = props;

  const { isActive } = useTabs({
    item: value,
    value: tabsContextValue?.value || '',
  });

  const onPressHandler = () => {
    if (!disabled) {
      tabsContextValue?.updateValue?.(value || '');
    }
  };

  useEffect(() => {
    tabsContextValue?.storeValues?.(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      tabsContextValue?.allValues &&
      tabsContextValue.allValues?.length > 0 &&
      !tabsContextValue?.value
    ) {
      tabsContextValue?.updateValue?.(tabsContextValue?.allValues?.[0] || '', {
        onMounted: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsContextValue?.allValues]);

  const renderChildren = () => {
    if (title) {
      return (
        <StyledTabsItemText
          isActive={isActive}
          disabled={disabled}
          {...otherProps}>
          {title}
        </StyledTabsItemText>
      );
    }

    return children;
  };

  return (
    <StyledTabsItem
      onPress={onPressHandler}
      isActive={isActive}
      disabled={disabled}
      {...otherProps}>
      {renderChildren()}
    </StyledTabsItem>
  );
};
