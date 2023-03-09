// @imports
import { useTheme } from '@/core/styled/web';

export type useModeThemeOptionsType = object;

// @exports
export const useModeTheme = () => {
  const theme = useTheme();

  const isDark = theme.mode === ('dark' as any);

  const isLight = theme.mode === 'light';

  const color = isDark ? theme.colors.gray[50] : theme.colors.gray[900];

  const bg = isDark ? theme.colors.gray[900] : theme.colors.white;

  const borderColor = isDark ? theme.colors.gray[800] : theme.colors.gray[50];

  const linkColor = isDark ? theme.colors.blue[500] : theme.colors.blue[200];

  const iconColor = isDark ? theme.colors.gray[300] : theme.colors.gray[500];

  return {
    theme,
    isDark,
    isLight,
    color,
    bg,
    borderColor,
    linkColor,
    iconColor,
  };
};
