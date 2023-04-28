// @imports
import React, { useEffect } from 'react';

import { useTabsContext } from './tabs-context';
import type { TabsItemProps, TabsProps, TabsItemTextProps } from './tabs.types';

import { BaseButton } from '../button';
import { Text } from '../text';

import {
  tabsItemDefaultStyle,
  tabsItemVariantStyle,
  tabsItemTextDefaultStyle,
} from '@/core/styled/themed/tabs';
import { styled } from '@/core/styled/native';
import { useTabs } from './use-tabs';

// @exports
export const StyledTabsItem = styled(BaseButton)<TabsItemProps & TabsProps>`
  ${(props) => tabsItemDefaultStyle({ ...props, type: 'native' } as any)}
  ${(props) => tabsItemVariantStyle({ ...props, type: 'native' } as any)}
`;

export const StyledTabsItemText = styled(Text)<TabsItemTextProps & TabsProps>`
  ${(props) => tabsItemTextDefaultStyle({ ...props, type: 'native' } as any)}
`;

export const TabsItem = (props: TabsItemProps) => {
  const tabsContextValue = useTabsContext();

  const {
    children,
    value = '',
    disabled,
    title,
    textStyle,
    _selected,
    textProps,
    ...otherProps
  } = props;

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
          {...textProps}
          style={textStyle as any}
          {...(tabsContextValue as any)}>
          {title as any}
        </StyledTabsItemText>
      );
    }

    return <>{children}</>;
  };

  return (
    <StyledTabsItem
      onPress={onPressHandler}
      {...(tabsContextValue as any)}
      isActive={isActive}
      disabled={disabled}
      {...otherProps}
      style={[isActive ? (_selected as any) : {}]}>
      {renderChildren()}
    </StyledTabsItem>
  );
};
