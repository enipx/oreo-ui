// @imports
import { View } from '@components/view';

import type { IndicatorProps } from './indicator.types';

import { indicatorDefaultStyle } from '@/core/styled/themed/indicator';
import { styled } from '@/core/styled/web';

// @exports
export const StyledIndicator = styled(View)<IndicatorProps>`
  ${(props) => indicatorDefaultStyle({ ...props } as any)}
`;

export const Indicator = (props: IndicatorProps) => {
  const { value, children, ...otherProps } = props;

  const renderChildren = () => {
    return children;
  };

  return (
    <View display="inline-flex" position="relative">
      <StyledIndicator {...otherProps}>{value}</StyledIndicator>
      {renderChildren()}
    </View>
  );
};
