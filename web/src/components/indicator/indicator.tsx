// @imports

import { allStyleWithoutSize } from '@/core/styled/system';
import { indicatorDefaultStyle } from '@/core/styled/themed/indicator';
import { styled, baseStyled } from '@/core/styled/web';
import { componentDefaultStyle } from '@/core/styled/themed/base';

import { View } from '@components/view';

import type { IndicatorProps } from './indicator.types';

// @exports
export const StyledIndicator = styled(
  baseStyled('div', ['layout'])
)<IndicatorProps>`
  ${(props) => indicatorDefaultStyle({ ...props } as any)}
  ${(props) => componentDefaultStyle({ ...props } as any)}
  ${allStyleWithoutSize()}
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
