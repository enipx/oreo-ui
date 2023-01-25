// @imports
import { useId } from 'react';

import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import type { CheckboxProps } from './checkbox.types';

import {
  checkboxDefaults,
  checkboxDefaultStyle,
  checkboxSizeVariant,
  checkboxCheckedStyle,
} from '@/core/styled/themed/checkbox';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledCheckbox = styled(
  baseStyled('input', ['shadow', 'grid', 'position', 'background'])
)<CheckboxProps>`
  ${({ theme, disabled }) => checkboxDefaultStyle({ theme, disabled })};
  ${({ theme, disabled }) => checkboxSizeVariant({ theme, disabled })};
  ${({ theme, disabled, size, indeterminate }) =>
    checkboxCheckedStyle({ theme, disabled, size, indeterminate })};
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
