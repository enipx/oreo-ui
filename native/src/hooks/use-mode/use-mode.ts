// @imports
import { useState } from 'react';
import { useColorScheme } from 'react-native';

import type { ThemeModeKeys } from '@/core/constants/index.types';

export type UseModeOptionsType = {
  mode: ThemeModeKeys;
  onChange?: () => void;
  systemPreferredMode?: boolean;
};

// @exports
export const useMode = (options: UseModeOptionsType) => {
  const { mode: _mode, onChange, systemPreferredMode = true } = options;

  const deviceMode = useColorScheme();

  const [mode, setMode] = useState<ThemeModeKeys>(
    systemPreferredMode ? (deviceMode as ThemeModeKeys) : _mode
  );

  const toggleHandler = () => {
    const newMode: ThemeModeKeys = mode === 'light' ? 'dark' : 'light';
    saveHandler(newMode);
  };

  const saveHandler = (__mode: ThemeModeKeys) => {
    setMode(__mode);
    onChange?.();
  };

  return { mode, toggle: toggleHandler, save: saveHandler };
};
