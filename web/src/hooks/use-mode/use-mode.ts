// @imports
import { useEffect, useState } from 'react';

import type { ThemeModeKeys } from '@/core/constants/index.types';
import { setLocalStorage, getLocalStorage } from '@/core/helpers/storage';
import { useKeydown } from '@/core/hooks/use-keydown';

export type UseModeOptionsType = {
  mode: ThemeModeKeys;
  onChange?: () => void;
  keyboardShortcut?: string;
  disableKeyboardShortcut?: boolean;
  saveToStorage?: boolean;
  systemPreferredMode?: boolean;
};

// @exports
export const useMode = (options: UseModeOptionsType) => {
  const {
    mode: _mode,
    onChange,
    keyboardShortcut = 'shift+d',
    disableKeyboardShortcut,
    saveToStorage,
    systemPreferredMode,
  } = options;

  const [mode, setMode] = useState<ThemeModeKeys>(_mode);

  const toggleHandler = () => {
    const newMode: ThemeModeKeys = mode === 'light' ? 'dark' : 'light';
    saveHandler(newMode);
  };

  const saveHandler = (__mode: ThemeModeKeys) => {
    setMode(__mode);
    if (saveToStorage) {
      setLocalStorage('mode', __mode);
    }
    onChange?.();
  };

  const loadHandler = () => {
    const storedMode = getLocalStorage('mode');

    if (storedMode) {
      saveHandler(storedMode as ThemeModeKeys);
      return;
    }

    if (systemPreferredMode) {
      const __mode: ThemeModeKeys = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
        ? 'dark'
        : 'light';

      saveHandler(__mode);
    }
  };

  useKeydown({
    key: keyboardShortcut,
    callback: toggleHandler,
    enabled: !disableKeyboardShortcut,
  });

  useEffect(() => {
    loadHandler();
  }, []);

  return { mode, toggle: toggleHandler, save: saveHandler, load: loadHandler };
};
