// @imports
import React from 'react';
import { IconButton } from '../icon-button';
import { Text } from '../text';
import { View } from '../view/view';
import { StyledHintText } from '../input/input';
import { InputField } from '../input/input-field';
import type { TextareaProps } from './textarea.types';

import { textareaDefaults } from '@/core/styled/themed/textarea';

import {
  textareaDefaultStyle,
  borderColor,
  backgroundColor,
} from '@/core/styled/themed/textarea';
import { styled, baseStyled, defaultTheme } from '@/core/styled/native';

// @exports
export const StyledInput = styled(
  baseStyled('TextInput', ['shadow', 'grid', 'position', 'background'])
)<TextareaProps>`
  ${({ theme }) => textareaDefaultStyle({ theme, type: 'native' })}
  border-color: ${borderColor};
  background-color: ${backgroundColor};
`;

export const Textarea: React.FC<TextareaProps> = (props) => {
  const {
    label,
    state = textareaDefaults.state as TextareaProps['state'],
    disabled: defaultDisabled,
    icon,
    hint,
    ...otherProps
  } = props;

  const disabled = defaultDisabled || state === 'disabled';

  const textareaState: TextareaProps['state'] = disabled ? 'disabled' : state;

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <View position="relative">
        {icon ? (
          <View zIndex="docked" position="absolute" right="md" bottom="md">
            <IconButton size="xs" icon={icon} />
          </View>
        ) : null}
        <InputField
          multiline
          editable={!disabled}
          state={textareaState}
          textAlignVertical="top"
          minHeight={defaultTheme.space[20]}
          {...(otherProps as any)}
        />
      </View>
      {hint ? (
        <StyledHintText state={textareaState} fontSize="xs" mt="sm">
          {hint}
        </StyledHintText>
      ) : null}
    </View>
  );
};
