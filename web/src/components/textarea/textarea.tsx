// @imports
import { IconButton } from '../icon-button';
import { StyledHintText } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import type { TextareaProps } from './textarea.types';

import {
  textareaDefaultStyle,
  textareaDefaults,
  borderColor,
  backgroundColor,
  hoverBorderColor,
  focusBorderColor,
} from '@/core/styled/themed/textarea';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledTextarea = styled(
  baseStyled('textarea', ['shadow', 'grid', 'position', 'background'])
)<TextareaProps>`
  ${({ theme, disabled, resize }) =>
    textareaDefaultStyle({ theme, disabled, resize })}
  border-color: ${borderColor};
  background-color: ${backgroundColor};

  :hover {
    border-color: ${hoverBorderColor};
  }

  :focus {
    border-color: ${focusBorderColor};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

export const Textarea: React.FC<TextareaProps> = (props) => {
  const {
    icon,
    state = textareaDefaults.state as TextareaProps['state'],
    disabled: defaultDisabled,
    hint,
    label,
    onFocus,
    onBlur,
    type,
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
      <View position="relative" {...(otherProps as any)}>
        {icon ? (
          <View zIndex="docked" position="absolute" right="md" bottom="md">
            <IconButton size="xs" icon={icon} />
          </View>
        ) : null}
        <StyledTextarea
          state={textareaState}
          disabled={disabled}
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
