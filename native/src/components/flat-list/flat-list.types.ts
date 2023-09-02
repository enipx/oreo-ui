import type { FlatListProps as DefaultFlatListProps } from 'react-native';
import type { ReactChildrenType } from '@oreo-ui/core/dist/styled/components.types';

export interface FlatListRenderProps {
  item: any;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

export interface FlatListProps extends Partial<DefaultFlatListProps<any>> {
  data: any[];
  renderComponent?: (item: FlatListRenderProps) => ReactChildrenType;
}
