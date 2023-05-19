// @imports
import { allStyleWithoutSize } from '@/core/styled/system';
import { componentDefaultStyle } from '@/core/styled/themed/base';
import {
  textareaDefaultStyle,
  textareaDefaults,
  borderColor,
  backgroundColor,
  focusBorderColor,
  hoverBorderColor,
} from '@/core/styled/themed/textarea';
import { styled, baseStyled } from '@/core/styled/web';

import { IconButton } from '../icon-button';
import { InputLabel, InputHint } from '../input/input';
import { View } from '../view';
import type { TextareaProps } from './textarea.types';

// @exports
export const StyledTextarea = styled(baseStyled('textarea'))<TextareaProps>`
  :hover {
    border-color: ${hoverBorderColor};
  }

  :focus {
    border-color: ${focusBorderColor};
  }

  ${(props) => textareaDefaultStyle({ ...props } as any)}

  border-color: ${borderColor};
  background-color: ${backgroundColor};

  ${(props) => componentDefaultStyle({ ...props } as any)}

  ${allStyleWithoutSize()}
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
      <InputLabel label={label} />
      <View position="relative">
        {icon ? (
          <View zIndex="docked" position="absolute" right="md" bottom="md">
            <IconButton variant="link" size="xs" icon={icon} />
          </View>
        ) : null}
        <StyledTextarea
          state={textareaState}
          disabled={disabled}
          {...(otherProps as any)}
        />
      </View>

      <InputHint hint={hint} state={textareaState} />
    </View>
  );
};
