// @imports
import { IconButton } from '../icon-button';
import { InputLabel, InputHint, StyledInputContainer } from '../input/input';
import { View } from '../view';
import { ArrowDownIcon } from './select-icon';
import type { SelectProps, SelectContainerProps } from './select.types';

import {
  width,
  height,
  minWidth,
  maxWidth,
  compose,
} from '@/core/styled/system';
import {
  inputDefaultStyle,
  backgroundColor,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
} from '@/core/styled/themed/input';
import {
  selectDefaults,
  selectBaseStyle,
  selectContainerBaseStyle,
} from '@/core/styled/themed/select';
import { styled, baseStyled } from '@/core/styled/web';

// @exports
export const StyledSelectContainer = styled(
  StyledInputContainer
)<SelectContainerProps>`
  ${(props) => selectContainerBaseStyle({ ...props, type: 'web' } as any)};
  ${compose(width, height, minWidth, maxWidth)}
`;

export const StyledSelect = styled(
  baseStyled('select', ['shadow', 'grid', 'position', 'background'])
)<SelectProps>`
  &:hover {
    border-color: ${hoverBorderColor};
  }

  &:focus {
    border-color: ${focusBorderColor};
  }

  ${(props) => inputDefaultStyle({ ...props } as any)}
  ${(props) => selectBaseStyle({ ...props } as any)}

  background-color: ${backgroundColor};
  border-color: ${borderColor};
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
        className={selectDefaults.dropdownIconClassName}
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
      <StyledSelectContainer size={size} {...(otherProps as any)}>
        <StyledSelect
          size={size}
          {...(otherProps as any)}
          state={selectState}
          disabled={isDisabled}>
          {renderChildren()}
        </StyledSelect>
        {renderDropdownIcon()}
      </StyledSelectContainer>

      <InputHint hint={hint} state={selectState} />
    </View>
  );
};
