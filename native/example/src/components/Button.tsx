import * as React from 'react';

import { useModeContext, Button, useModeTheme } from '@oreo-ui/native';

export const ModeButton = () => {
  const mode = useModeContext();

  const { isDark } = useModeTheme();

  return (
    <Button
      text={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      colorScheme="gray"
      variant="subtle"
      mt="lg"
      mb="sm"
      fullWidth
      rounded
      onPress={mode?.toggle}
    />
  );
};
