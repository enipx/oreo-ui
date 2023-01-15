import type { ThemeProviderProps } from 'styled-components';

import type { ObjectTypes } from '../constants/index.types';

export interface ProviderThemedStyledProps
  extends Partial<ThemeProviderProps<ObjectTypes>> {}
