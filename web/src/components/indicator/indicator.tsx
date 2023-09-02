// @imports

import { allStyleWithoutSize } from '@oreo-ui/core/dist/styled/system';
import { indicatorDefaultStyle } from '@oreo-ui/core/dist/styled/themed/indicator';
import { styled, baseStyled } from '@oreo-ui/core/dist/styled/web';
import { componentDefaultStyle } from '@oreo-ui/core/dist/styled/themed/base';

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
