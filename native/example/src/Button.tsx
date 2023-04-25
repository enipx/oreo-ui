import * as React from 'react';

import { useModeContext, Button } from '@oreo-ui/native';

export const ModeButton = () => {
  const mode = useModeContext();

  return (
    <Button
      text="Toggle mode"
      my="lg"
      fullWidth
      rounded
      onPress={mode?.toggle}
    />
  );
};
