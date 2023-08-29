// @imports
import { packagePrefix } from '../constants/';
import { domExistsHandler } from './dom';

const LocalStorageKeys = {
  mode: `${packagePrefix}_preffered-mode`,
};

type LocalStorageKeysType = keyof typeof LocalStorageKeys;

export const getLocalStorageKeys = (_key: LocalStorageKeysType) => {
  return LocalStorageKeys?.[_key] || _key;
};

/**
 *
 * @param key : LocalStorageKeysType
 * @param value : any
 * @returns null
 */
export const setLocalStorage = (_key: LocalStorageKeysType, value: any) => {
  if (!domExistsHandler()) return;

  const key = getLocalStorageKeys(_key);

  window.localStorage.setItem(key, value);
};

/**
 *
 * @param key : LocalStorageKeysType
 * @returns local storage key
 */
export const getLocalStorage = (_key: LocalStorageKeysType) => {
  if (!domExistsHandler()) return;

  const key = getLocalStorageKeys(_key);

  return window.localStorage.getItem(key);
};

/**
 * @param key : LocalStorageKeysType
 * @returns null: remove local storage
 */
export const removeLocalStorage = (_key: LocalStorageKeysType) => {
  if (!domExistsHandler()) return;

  const key = getLocalStorageKeys(_key);

  window.localStorage.removeItem(key);
};

/**
 *
 * @returns null: clear local storage
 */
export const clearLocalStorage = () => {
  if (!domExistsHandler()) return;

  window.localStorage.clear();
};
