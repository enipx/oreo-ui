// @imports
import spacing from '@/core/theme/utilities/spacing';
import React, { forwardRef } from 'react';

import { FlatList as DefaultFlatList } from 'react-native';
import type { FlatListProps, FlatListRenderProps } from './flat-list.types';

// @exports
export const FlatList = forwardRef(
  (props: FlatListProps, ref: React.LegacyRef<DefaultFlatList>) => {
    const { renderItem: _renderItem, renderComponent, ...otherProps } = props;

    const renderItem = (item: FlatListRenderProps) => {
      if (renderComponent) {
        return renderComponent?.(item);
      }

      if (_renderItem) {
        return _renderItem;
      }

      return null;
    };

    const keyExtractor = (_item: any, _index: number) => {
      return `data-item-${_index}`;
    };

    return (
      <DefaultFlatList
        renderItem={renderItem as any}
        keyExtractor={keyExtractor}
        ref={ref}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: otherProps.horizontal ? spacing[0] : spacing[20],
        }}
        {...otherProps}
      />
    );
  }
);
