// @imports
import { useState } from 'react';
import { useColorScheme } from 'react-native';

import type { ThemeModeKeys } from '@oreo-ui/core/dist/constants/index.types';

export type UseModeOptionsType = {
  mode: ThemeModeKeys;
  onChange?: (mode: ThemeModeKeys) => void;
  useSystemPreferredMode?: boolean;
};

// @exports
export const useMode = (options: UseModeOptionsType) => {
  const { mode: _mode, onChange, useSystemPreferredMode } = options;

  const deviceMode = useColorScheme();

  const [mode, setMode] = useState<ThemeModeKeys>(
    useSystemPreferredMode ? (deviceMode as ThemeModeKeys) : _mode
  );

  const toggleHandler = () => {
    const newMode: ThemeModeKeys = mode === 'light' ? 'dark' : 'light';
    saveHandler(newMode);
  };

  const saveHandler = (__mode: ThemeModeKeys) => {
    setMode(__mode);
    onChange?.(__mode);
  };

  return { mode, toggle: toggleHandler, save: saveHandler };
};
