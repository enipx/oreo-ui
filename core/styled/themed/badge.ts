import type { BadgeThemedDefaultProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { getColorSchemeStyle } from './base';

// @defaults
export const badgeDefaults = {};

// @themes
type BadgeSystemThemeParams = SystemThemeParams & BadgeThemedDefaultProps;

export const badgeDefaultStyle = (options: BadgeSystemThemeParams) => {
  const { theme, type = 'web', colorScheme, variant } = options;

  const { backgroundColor, color } = getColorSchemeStyle({
    theme,
    colorScheme: colorScheme || 'gray',
    variant: variant || 'subtle',
  });

  const baseStyle = `
    background-color: ${backgroundColor};
    color: ${color};
    font-weight: ${theme.fontWeights.bold};
    border-radius: ${theme.radii.sm};
    text-transform: uppercase;
  `;

  const native = `
    ${baseStyle}
    padding-horizontal: ${theme.space[2]};
    padding-vertical: ${theme.space[1]};
    align-self: flex-start;
  `;

  const web = `
    ${baseStyle}
    padding: ${theme.space[0.5]} ${theme.space[1]};
    white-space: nowrap;
    vertical-align: middle;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
