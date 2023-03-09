// @imports
import React from 'react';
import type { ContainerProps } from './container.types';

import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from '../view';
import { ScrollView } from '../scroll-view';
import { useModeTheme } from '../../hooks';

// @exports
export const Container: React.FC<ContainerProps> = (props) => {
  const {
    statusBarProps,
    statusBar,
    scrollable,
    scrollViewProps,
    ...otherProps
  } = props;

  const { bg } = useModeTheme();

  const backgroundColor =
    (props!.backgroundColor as string) || (props!.bg as string) || bg;

  const renderView = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View flex={1} {...(otherProps as any)} />
      </TouchableWithoutFeedback>
    );
  };

  const renderChildren = () => {
    if (scrollable) {
      return <ScrollView {...scrollViewProps}>{renderView()}</ScrollView>;
    }

    return renderView();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar
        barStyle={statusBar || 'dark-content'}
        backgroundColor={backgroundColor}
        {...statusBarProps}
      />
      {renderChildren()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
