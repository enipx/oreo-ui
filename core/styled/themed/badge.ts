import type { BadgeThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';

// @defaults
export const badgeDefaults = {};

// @themes
type BadgeSystemThemeParams = SystemThemeParams & BadgeThemedDefaultProps;

export const badgeDefaultStyle = (options: BadgeSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant, rounded } = options;

  const { backgroundColor, color, borderColor } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: variant || 'subtle',
  });

  const paddingX = rounded ? theme.space[2] : theme.space[1];
  const paddingY = theme.space[0.5];

  const baseStyle = `
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: ${theme.fontWeights.bold};
    border-radius: ${rounded ? theme.radii.full : theme.radii.sm};
    border: 1px solid ${borderColor};
    padding: ${paddingY} ${paddingX};
  `;

  const native = `
    ${baseStyle}
    align-self: flex-start;
  `;

  const web = `
    ${baseStyle}
    white-space: nowrap;
    vertical-align: middle;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
