import { Platform } from 'react-native';

// return true if device is iOS
export const isIOS = () => {
  return Platform.OS === 'ios';
};

// return true if device is android
export const isAndroid = () => {
  return Platform.OS === 'android';
};
