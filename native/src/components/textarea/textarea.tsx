// @imports
import React from 'react';
import { IconButton } from '../icon-button';
import { View } from '../view/view';
import { InputHint, InputLabel } from '../input/input';
import { InputField } from '../input/input-field';
import type { TextareaProps } from './textarea.types';

import { textareaDefaults } from '@/core/styled/themed/textarea';

import { useTheme } from '@/core/styled/native';

// @exports
export const Textarea: React.FC<TextareaProps> = (props) => {
  const {
    label,
    state = textareaDefaults.state as TextareaProps['state'],
    disabled: defaultDisabled,
    icon,
    hint,
    ...otherProps
  } = props;

  const { components } = useTheme();

  const disabled = defaultDisabled || state === 'disabled';

  const textareaState: TextareaProps['state'] = disabled ? 'disabled' : state;

  return (
    <View>
      <InputLabel label={label} />
      <View position="relative">
        {icon ? (
          <View zIndex="docked" position="absolute" right="md" bottom="md">
            <IconButton variant="link" size="xs" icon={icon} />
          </View>
        ) : null}
        <InputField
          multiline
          editable={!disabled}
          state={textareaState}
          textAlignVertical="top"
          minHeight={components.textarea.height}
          {...(otherProps as any)}
        />
      </View>
      <InputHint hint={hint} state={textareaState} />
    </View>
  );
};
