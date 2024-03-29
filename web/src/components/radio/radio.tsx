// @imports
import { isArrayLastItem } from '@oreo-ui/core/dist/helpers/base';
import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import {
  radioDefaults,
  radioDefaultStyle,
  radioSizeVariant,
  radioCheckedStyle,
  radioDataExist,
} from '@oreo-ui/core/dist/styled/themed/radio';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { useId } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type { RadioProps, RadioDataType } from './radio.types';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

// @exports
export const StyledRadio = styled(baseStyled('input'))<RadioProps>`
  ${(props) => radioDefaultStyle({ ...props } as any)};
  ${(props) => radioSizeVariant({ ...props } as any)};
  ${(props) => radioCheckedStyle({ ...props } as any)};
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
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
            <InputLabel label={label} mb="0" as="span" display="block" />
            <InputHint as="span" state="default" hint={description} mt="0" />
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
