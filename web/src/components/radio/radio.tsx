// @imports
import { useId } from 'react';

import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import type { RadioProps, RadioDataType } from './radio.types';

import { isArrayLastItem } from '@/core/helpers/base';
import {
  radioDefaults,
  radioDefaultStyle,
  radioSizeVariant,
  radioCheckedStyle,
  radioDataExist,
} from '@/core/styled/themed/radio';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledRadio = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<RadioProps>`
  ${({ theme, disabled }) => radioDefaultStyle({ theme, disabled })};
  ${({ theme, disabled }) => radioSizeVariant({ theme, disabled })};
  ${({ theme, disabled, size }) =>
    radioCheckedStyle({ theme, disabled, size })};
`;

export const RadioControl: React.FC<RadioProps> = (props) => {
  const {
    size = radioDefaults.size as RadioProps['size'],
    disabled,
    description,
    label,
    id,
    ...otherProps
  } = props;

  const defaultId = useId();
  const checkboxId = id || defaultId;

  const renderLabel = () => {
    if (label) {
      return (
        <label htmlFor={checkboxId}>
          <View as="span" ml="md" display="block">
            <Text as="span" display="block" fontWeight="medium" fontSize="sm">
              {label}
            </Text>
            {description ? (
              <StyledHintText state="default" as="span" fontSize="xs">
                {description}
              </StyledHintText>
            ) : null}
          </View>
        </label>
      );
    }

    return null;
  };

  return (
    <View display="flex" flexCenterY>
      <StyledRadio
        size={size}
        disabled={disabled}
        {...(otherProps as any)}
        type="radio"
        id={checkboxId}
      />
      {renderLabel()}
    </View>
  );
};

export const Radio: React.FC<RadioProps> = (props) => {
  const { data, horizontal, defaultValue, name, ...otherProps } = props;

  const isItemChecked = (item: RadioDataType) => {
    return item.value ? item.value === defaultValue : item.id === defaultValue;
  };

  if (radioDataExist(data)) {
    return (
      <View display={horizontal ? 'flex' : undefined}>
        {data?.map((radioItem, index) => {
          const isLast = isArrayLastItem({ array: data, index });
          const key = `${radioItem.value || radioItem.id}-${index}`;

          const defaultChecked = isItemChecked(radioItem);

          return (
            <View
              key={key}
              mb={isLast || horizontal ? 'none' : 'base'}
              mr={isLast || !horizontal ? 'none' : 'base'}>
              <RadioControl
                {...otherProps}
                {...radioItem}
                defaultChecked={defaultChecked}
                name={name}
              />
            </View>
          );
        })}
      </View>
    );
  }

  return <RadioControl {...otherProps} name={name} />;
};
