// @imports
import { IconButton } from '../icon-button';
import { StyledHintText, StyledInputContainer } from '../input/input';
import { Text } from '../text';
import { View } from '../view';
import { ArrowDown } from './select-icon';
import type { SelectProps, SelectContainerProps } from './select.types';

import { inputDefaultStyle } from '@/core/styled/themed/input';
import { selectDefaults, selectBaseStyle } from '@/core/styled/themed/select';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledSelectContainer = styled(
  StyledInputContainer
)<SelectContainerProps>`
  padding: 0;
`;

export const StyledSelect = styled(
  baseStyled('select', ['shadow', 'grid', 'position', 'background'])
)<SelectProps>`
  ${({ theme, disabled }) => inputDefaultStyle({ theme, disabled })}
  ${({ theme, size }) => selectBaseStyle({ theme, size })}
`;

export const Select: React.FC<SelectProps> = (props) => {
  const {
    icon,
    state = selectDefaults.state as SelectProps['state'],
    disabled,
    size = selectDefaults.size as SelectProps['size'],
    hint,
    label,
    onFocus,
    onBlur,
    type,
    placeholder,
    children,
    ...otherProps
  } = props;

  const isDisabled = disabled || state === 'disabled';

  const selectState: SelectProps['state'] = isDisabled ? 'disabled' : state;

  const renderDropdownIcon = () => {
    return (
      <IconButton
        size={size}
        icon={icon || <ArrowDown size="xs" />}
        style={{ position: 'absolute', right: 0, pointerEvents: 'none' }}
      />
    );
  };

  const renderChildren = () => {
    if (placeholder) {
      return (
        <>
          <option>{placeholder}</option>
          {children}
        </>
      );
    }

    return children;
  };

  return (
    <View>
      {label ? (
        <Text fontWeight="medium" fontSize="sm" mb="sm">
          {label}
        </Text>
      ) : null}
      <StyledSelectContainer
        size={size}
        disabled={isDisabled}
        state={selectState}
        {...(otherProps as any)}>
        <StyledSelect
          size={size}
          {...(otherProps as any)}
          disabled={isDisabled}>
          {renderChildren()}
        </StyledSelect>
        {renderDropdownIcon()}
      </StyledSelectContainer>
      {hint ? (
        <StyledHintText state={selectState} fontSize="xs" mt="sm">
          {hint}
        </StyledHintText>
      ) : null}
    </View>
  );
};
