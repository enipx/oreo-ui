// @imports

import type { ThemeModeKeys } from '@/core/constants/index.types';
import { getLocalStorage, setLocalStorage } from '@/core/helpers/storage';
import { useKeydown } from '@/core/hooks/use-keydown';
import { useCallback, useEffect, useState } from 'react';

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

  const toggleHandler = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const saveHandler = useCallback((__mode: ThemeModeKeys) => {
    setMode(__mode);
  }, []);

  const loadHandler = useCallback(() => {
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
  }, []);

  useKeydown({
    key: keyboardShortcut,
    callback: toggleHandler,
    enabled: !disableKeyboardShortcut,
  });

  useEffect(() => {
    loadHandler();
  }, []);

  useEffect(() => {
    if (saveToStorage) {
      setLocalStorage('mode', mode);
    }
    onChange?.();
  }, [mode]);

  return { mode, toggle: toggleHandler, save: saveHandler, load: loadHandler };
};
