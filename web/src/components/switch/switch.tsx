// @imports
import { useId } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type { SwitchProps } from './switch.types';

import {
  switchDefaults,
  switchDefaultStyle,
  switchSizeVariant,
  switchCheckedStyle,
  switchBaseStyle,
} from '@/core/styled/themed/switch';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledSwitch = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<SwitchProps>`
  ${({ theme, disabled }) => switchDefaultStyle({ theme, disabled })};
  ${({ theme, disabled, size }) => switchBaseStyle({ theme, disabled, size })};
  ${({ theme, disabled }) => switchSizeVariant({ theme, disabled })};
  ${({ theme, disabled, size }) =>
    switchCheckedStyle({ theme, disabled, size })};
`;

export const Switch: React.FC<SwitchProps> = (props) => {
  const {
    size = switchDefaults.size as unknown as SwitchProps['size'],
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
      <StyledSwitch
        size={size}
        disabled={disabled}
        {...(otherProps as any)}
        type="checkbox"
        id={checkboxId}
      />
      {renderLabel()}
    </View>
  );
};
