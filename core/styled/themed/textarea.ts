import { transitionStyle } from '../css';
import type {
  StyledThemeProps,
  SystemThemeParams,
  SystemThemeReturnType,
} from '../index.types';
import { themer } from '../web';

// @button themes
export const textareaDefaults = {
  disabledOpacity: 0.5,
  state: 'default',
  selectionColor: 'rgba(34, 109, 204, 0.5)',
};

export const backgroundColor = themer.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.white },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[50] },
});

export const borderColor = themer.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[100] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const hoverBorderColor = themer.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const focusBorderColor = themer.variants('mode', 'state', {
  default: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  focused: { light: ({ theme }: StyledThemeProps) => theme.colors.blue[500] },
  invalid: { light: ({ theme }: StyledThemeProps) => theme.colors.red[500] },
  disabled: { light: ({ theme }: StyledThemeProps) => theme.colors.gray[200] },
});

export const textareaDefaultStyle = (option: SystemThemeParams) => {
  const { theme, type = 'web', disabled, resize } = option;

  const opacity = disabled ? textareaDefaults.disabledOpacity : 1;

  const baseStyle = `
    ${transitionStyle()}
    opacity: ${opacity};
    width: 100%;
    border-width: 1px;
    border-style: solid;
    position: relative;
    overflow: hidden;
    min-height: ${theme.space[20]};
    outline: 0;
    border-radius: ${theme.radii.md};
    padding-left: ${theme.space.md};
    padding-right: ${theme.space.md};
    padding-top: ${theme.space.sm};
    padding-bottom: ${theme.space.sm};
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    appearance: none;
    white-space: nowrap;
    font-size: ${theme.fontSizes.sm};
    resize: ${resize || 'auto'};

    ::placeholder {
      font-size: ${theme.fontSizes.sm};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
