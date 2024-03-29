// @imports
import React, { useCallback, useEffect, useState } from 'react';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view/view';
import { FlatList } from '../flat-list';
import { InputHint, InputLabel, StyledInputContainer } from '../input/input';
import { ArrowDownIcon, CheckMarkIcon } from './select-icon';
import type { SelectProps, SelectContainerProps } from './select.types';

import {
  selectDefaults,
  selectContainerBaseStyle,
  selectPlaceholderBaseStyle,
} from '@oreo-ui/core/dist/styled/themed/select';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/native';
import { useModal } from '../modal';
import { BaseButton } from '../button';
import { getWidowLayout } from '../../helpers/base';
import { Divider } from '../divider';

// @exports
export const StyledSelectContainer = styled(
  StyledInputContainer
)<SelectContainerProps>`
  ${({ theme, size }) =>
    selectContainerBaseStyle({ theme, size, type: 'native' })}
`;

export const StyledSelect = styled(
  baseStyled('TouchableOpacity', ['shadow', 'grid', 'position', 'background'])
)<SelectProps>``;

export const StyledSelectPlaceholder = styled(
  baseStyled('Text', [
    'background',
    'border',
    'flexbox',
    'grid',
    'position',
    'shadow',
    'layout',
  ])
)<SelectProps>`
  ${({ theme, size }) =>
    selectPlaceholderBaseStyle({ theme, size, type: 'native' })}
`;

export const Select: React.FC<SelectProps> = (props) => {
  const {
    icon,
    state = selectDefaults.state as SelectProps['state'],
    size = selectDefaults.size as SelectProps['size'],
    disabled,
    hint,
    label,
    placeholder,
    data,
    value,
    valueProperty,
    keyProperty,
    onChange,
    renderOptions,
    renderSelect,
    ...otherProps
  } = props;

  const modal = useModal();

  const [selectedValue, setSelectedValue] = useState(value || undefined);

  const isDisabled = disabled || state === 'disabled';

  const selectState: SelectProps['state'] = isDisabled ? 'disabled' : state;

  const activeOpacity = isDisabled ? 1 : selectDefaults.activeOpacity;

  const getItemValue = useCallback(
    (item: any) => {
      const defaultValue = item?.value || item;
      const defaultKey = item?.id || item;

      const _value = valueProperty
        ? item?.[valueProperty] || defaultValue
        : defaultValue;

      const key = keyProperty ? item?.[keyProperty] || defaultKey : defaultKey;

      return {
        value: _value,
        key,
      };
    },
    [valueProperty, keyProperty]
  );

  const renderComponent = useCallback(
    (options: any) => {
      const { item, index } = options;

      const isLastItem = index === (data?.length || 0) - 1;

      if (renderOptions) {
        return renderOptions(options);
      }

      const { value: itemValue, key: itemKey } = getItemValue(item);

      const isActive = getItemValue(selectedValue).key === itemKey;

      const onPressHandler = () => {
        setSelectedValue(item);
        onChange?.(item);
        modal.hide();
      };

      return (
        <BaseButton onPress={onPressHandler}>
          <>
            <View
              py="base"
              px="base"
              flexDirection="row"
              justifyContent="space-between"
              flexCenterX>
              <Text fontSize="md">{itemValue}</Text>

              {isActive ? (
                <View>
                  <CheckMarkIcon strokeWidth={2.5} size="2xs" />
                </View>
              ) : null}
            </View>
            {isLastItem ? null : <Divider />}
          </>
        </BaseButton>
      );
    },
    [data?.length, getItemValue, modal, onChange, renderOptions, selectedValue]
  );

  const renderComponentSelect = useCallback(() => {
    if (renderSelect) {
      return renderSelect(data || []);
    }

    return (
      <View>
        <FlatList data={data || []} renderComponent={renderComponent} />
      </View>
    );
  }, [data, renderComponent, renderSelect]);

  const onPressHandler = () => {
    if (!isDisabled) {
      // ..
      modal.show({
        pos: 'bottom',
        removeContentMargin: true,
        removeContentPadding: true,
        hideCloseButton: true,
        children: renderComponentSelect(),
        style: { maxHeight: getWidowLayout(1.5).height },
      });
    }
  };

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const renderDropdownIcon = () => {
    return (
      <IconButton
        onPress={onPressHandler}
        size={size}
        icon={icon || <ArrowDownIcon size="xs" />}
      />
    );
  };

  const renderChildren = () => {
    return (
      <>
        <StyledSelectPlaceholder size={size}>
          {getItemValue(selectedValue).value || placeholder}
        </StyledSelectPlaceholder>
        {renderDropdownIcon()}
      </>
    );
  };

  return (
    <View>
      <InputLabel label={label} />
      <StyledSelect onPress={onPressHandler} activeOpacity={activeOpacity}>
        <StyledSelectContainer
          size={size}
          disabled={isDisabled}
          state={selectState}
          {...(otherProps as any)}>
          {renderChildren()}
        </StyledSelectContainer>
      </StyledSelect>
      <InputHint hint={hint} state={selectState} />
    </View>
  );
};
