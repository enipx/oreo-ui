// @imports
import {
  flexDefaultStyle,
  flexSpacerDefaultStyle,
  flexColDefaultStyle,
  flexRowDefaultStyle,
} from '@oreo-ui/core/dist/styled/themed/flex';
import { styled } from '@oreo-ui/core/dist/styled/web';

import { View } from '@components/view';

import type { FlexProps, FlexColProps, FlexRowProps } from './flex.types';
import { FlexRowContextProvider, useFlexRowContext } from './flex-context';

// @exports
export const StyledFlex = styled(View)<FlexProps>`
  ${(props) => flexDefaultStyle({ ...props } as any)}
`;

export const StyledFlexRow = styled(StyledFlex)<FlexRowProps>`
  ${(props) => flexRowDefaultStyle({ ...props } as any)}
`;

export const StyledFlexCol = styled(View)<FlexColProps>`
  ${(props) => flexColDefaultStyle({ ...props } as any)}
`;

export const Spacer = styled(View)<FlexProps>`
  ${(props) => flexSpacerDefaultStyle({ ...props } as any)}
`;

export const Flex = (props: FlexProps) => {
  return <StyledFlex {...props} />;
};

export const FlexCol = (props: FlexColProps) => {
  const row = useFlexRowContext();

  const { children, ...otherProps } = props;

  return (
    <StyledFlexCol
      {...otherProps}
      spacing={row?.spacing}
      spacingX={row?.spacingX}
      spacingY={row?.spacingY}>
      {children}
    </StyledFlexCol>
  );
};

export const FlexRow = (props: FlexRowProps) => {
  const { spacing, spacingX, spacingY, ...otherProps } = props;

  return (
    <FlexRowContextProvider value={{ spacing, spacingX, spacingY }}>
      <StyledFlexRow {...otherProps} />
    </FlexRowContextProvider>
  );
};

Flex.Fill = Spacer;
Flex.Col = FlexCol;
Flex.Row = FlexRow;
