// @imports
import {
  switchDefaults,
  switchDefaultStyle,
  switchSizeVariant,
  switchCheckedStyle,
  switchBaseStyle,
} from '@oreo-ui/core/dist/styled/themed/switch';
import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { useId } from 'react';

import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type { SwitchProps } from './switch.types';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

// @exports
export const StyledSwitch = styled(
  baseStyled('input', ['layout'])
)<SwitchProps>`
  ${(props) => switchDefaultStyle({ ...props, packageType: 'web' } as any)};
  ${(props) => switchBaseStyle({ ...props, packageType: 'web' } as any)};
  ${(props) => switchSizeVariant({ ...props, packageType: 'web' } as any)};
  ${(props) => switchCheckedStyle({ ...props, packageType: 'web' } as any)};
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
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
