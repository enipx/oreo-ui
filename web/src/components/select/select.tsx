// @imports
import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import {
  inputDefaultStyle,
  backgroundColor,
  borderColor,
  hoverBorderColor,
  focusBorderColor,
} from '@oreo-ui/core/dist/styled/themed/input';
import {
  selectDefaults,
  selectBaseStyle,
  selectContainerBaseStyle,
} from '@oreo-ui/core/dist/styled/themed/select';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';

import { IconButton } from '../icon-button';
import { InputLabel, InputHint, StyledInputContainer } from '../input/input';
import { View } from '../view';
import { ArrowDownIcon } from './select-icon';
import type { SelectProps, SelectContainerProps } from './select.types';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

// @exports
export const StyledSelectContainer = styled(
  StyledInputContainer
)<SelectContainerProps>`
  ${(props) => selectContainerBaseStyle({ ...props, type: 'web' } as any)};
`;

export const StyledSelect = styled(baseStyled('select'))<SelectProps>`
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

  ${(props) => componentDefaultStyle({ ...props } as any)}

  ${allStyleWithoutSize()}
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
      <StyledSelectContainer size={size}>
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
