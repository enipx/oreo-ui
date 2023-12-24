// @imports
import React, { forwardRef } from 'react';

import {
  ScrollView as DefaultScrollView,
  RefreshControl,
  KeyboardAvoidingView,
} from 'react-native';
import type { ScrollViewProps } from './scroll-view.types';
import { View } from '../view';
import { isIOS } from '../../helpers/base';
import { BaseButton } from '../button';

// @exports
export const ScrollView = forwardRef(
  (props: ScrollViewProps, ref: React.LegacyRef<DefaultScrollView>) => {
    const {
      scrollX = false,
      scrollY = false,
      viewProps,
      pullToRefresh,
      onPullToRefresh,
      refreshControlProps,
      enableKeyboardAvoidingView,
      keyboardAvoidingViewProps,
      children,
      ...otherProps
    } = props;

    const renderRefreshControl = () => {
      if (pullToRefresh) {
        return (
          <RefreshControl
            refreshing={false}
            onRefresh={onPullToRefresh}
            {...refreshControlProps}
          />
        );
      }

      return undefined;
    };

    const renderChildren = () => {
      return (
        <DefaultScrollView
          showsHorizontalScrollIndicator={scrollX}
          showsVerticalScrollIndicator={scrollY}
          ref={ref}
          refreshControl={renderRefreshControl()}
          {...otherProps}>
          <BaseButton>
            <View {...viewProps}>{children}</View>
          </BaseButton>
        </DefaultScrollView>
      );
    };

    if (enableKeyboardAvoidingView) {
      return (
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          {...keyboardAvoidingViewProps}>
          {renderChildren()}
        </KeyboardAvoidingView>
      );
    }

    return renderChildren();
  }
);
