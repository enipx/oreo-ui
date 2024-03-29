import type { ShowNativeThemedDefaultProps } from '@oreo-ui/core/dist/styled/components.types';

export interface ShowProps extends ShowNativeThemedDefaultProps {}

export interface HideProps extends ShowProps {}

export type UseMatchLayoutOptionType = {
  above?: ShowProps['above'];
  below?: ShowProps['below'];
  initialValue?: boolean;
};
