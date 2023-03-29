import type { ScrollbarThemedDefaultProps } from '../components.types';
import { transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import { styleModeHandler } from './base';

import { convertReactCSSToCSSHandler } from '@/core/helpers/theme';
import { SpacingKeys } from '@/core/theme/utilities/spacing';

// @types
type ScrollbarSystemThemeParams = SystemThemeParams &
  ScrollbarThemedDefaultProps;

export const scrollbarDefaultStyle = (option: ScrollbarSystemThemeParams) => {
  const { theme, type = 'web', _handle, _track, _hover, scrollWidth } = option;

  const scrollbarWidth = scrollWidth
    ? theme.space?.[scrollWidth as SpacingKeys] || scrollWidth
    : theme.space[1.5];

  const bg = styleModeHandler({ theme, light: 'gray.50', dark: 'gray.800' });

  const hoverBg = styleModeHandler({
    theme,
    light: 'gray.100',
    dark: 'gray.700',
  });

  const baseStyle = `
  `;

  const native = `
  `;

  const web = `
    ${baseStyle}
    ${transitionStyle()}

    &::-webkit-scrollbar {
      width: ${scrollbarWidth};
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
      ${convertReactCSSToCSSHandler(_track)}
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${bg};
      border-radius: ${theme.radii.base};
      ${convertReactCSSToCSSHandler(_handle)}

      &:hover {
        background: ${hoverBg};
        ${convertReactCSSToCSSHandler(_hover)}
      }
    }

  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};
