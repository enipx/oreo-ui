// @imports

import type { ThemeModeKeys } from '@/core/constants/index.types';
import { getLocalStorage, setLocalStorage } from '@/core/helpers/storage';
import { useKeydown } from '@/core/hooks/use-keydown';
import { useCallback, useState, useEffect } from 'react';

export type UseModeOptionsType = {
  mode: ThemeModeKeys;
  onChange?: () => void;
  keyboardShortcut?: string;
  disableKeyboardShortcut?: boolean;
  saveToStorage?: boolean;
  useSystemPreferredMode?: boolean;
};

// @exports
export const useMode = (options: UseModeOptionsType) => {
  const {
    mode: _mode,
    onChange,
    keyboardShortcut,
    disableKeyboardShortcut,
    saveToStorage,
    useSystemPreferredMode,
  } = options;

  const getSystemPreferredMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  const storedMode = getLocalStorage('mode');

  const getCurrentMode = () => {
    if (storedMode) {
      return storedMode as ThemeModeKeys;
    }

    if (useSystemPreferredMode) {
      return getSystemPreferredMode();
    }

    return _mode;
  };

  const [mode, setMode] = useState<ThemeModeKeys>(getCurrentMode());

  const toggleHandler = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const saveHandler = useCallback((__mode: ThemeModeKeys) => {
    setMode(__mode);
  }, []);

  const loadHandler = useCallback(() => {
    const currentMode = getCurrentMode();
    saveHandler(currentMode);
  }, []);

  useKeydown({
    key: keyboardShortcut || '',
    callback: toggleHandler,
    enabled: !disableKeyboardShortcut && !!keyboardShortcut,
  });

  useEffect(() => {
    if (saveToStorage) {
      setLocalStorage('mode', mode);
    }
    onChange?.();
  }, [mode]);

  return { mode, toggle: toggleHandler, save: saveHandler, load: loadHandler };
};
