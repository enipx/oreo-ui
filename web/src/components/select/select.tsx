// @imports
import { IconButton } from '../icon-button';
import { InputLabel, InputHint, StyledInputContainer } from '../input/input';
import { View } from '../view';
import { ArrowDownIcon } from './select-icon';
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
  ${(props) => inputDefaultStyle({ ...props } as any)}
  ${(props) => selectBaseStyle({ ...props } as any)}
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
    data,
    ...otherProps
  } = props;

  const isDisabled = disabled || state === 'disabled';

  const selectState: SelectProps['state'] = isDisabled ? 'disabled' : state;

  const renderDropdownIcon = () => {
    return (
      <IconButton
        size={size}
        icon={icon || <ArrowDownIcon size="xs" />}
        style={{ position: 'absolute', right: 0, pointerEvents: 'none' }}
      />
    );
  };

  const renderOptions = () => {
    if (data) {
      return data.map((option, _index) => {
        const { value, title } = option;
        return (
          <option key={`${value}-${_index}`} value={value}>
            {title}
          </option>
        );
      });
    }

    return children;
  };

  const renderChildren = () => {
    if (placeholder) {
      return (
        <>
          <option>{placeholder}</option>
          {renderOptions()}
        </>
      );
    }

    return renderOptions();
  };

  return (
    <View>
      <InputLabel label={label} />
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

      <InputHint hint={hint} state={selectState} />
    </View>
  );
};
