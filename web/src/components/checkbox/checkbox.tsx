// @imports
import {
  checkboxDefaults,
  checkboxDefaultStyle,
  checkboxSizeVariant,
  checkboxCheckedStyle,
} from '@/core/styled/themed/checkbox';
import { allStyleWithoutSize } from '@/core/styled/system';
import { styled, baseStyled } from '@/core/styled/web';
import { useId } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type { CheckboxProps } from './checkbox.types';
import { componentDefaultStyle } from '@/core/styled/themed/base';

// @exports
export const StyledCheckbox = styled(baseStyled('input'))<CheckboxProps>`
  ${(props) => checkboxDefaultStyle({ ...props, type: 'web' } as any)};
  ${(props) => checkboxSizeVariant({ ...props, type: 'web' } as any)};
  ${(props) => checkboxCheckedStyle({ ...props, type: 'web' } as any)};
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
`;

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    size = checkboxDefaults.size as CheckboxProps['size'],
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
    <View>
      <View display="flex" flexCenterY>
        <StyledCheckbox
          size={size}
          disabled={disabled}
          {...(otherProps as any)}
          type="checkbox"
          id={checkboxId}
        />
        {renderLabel()}
      </View>
    </View>
  );
};
