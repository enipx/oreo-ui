import type { FlatListProps as DefaultFlatListProps } from 'react-native';

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
  renderComponent?: (item: FlatListRenderProps) => JSX.Element;
}
