import { Divider, Text, useModeTheme, View } from '@oreo-ui/native';
import React from 'react';

interface PreviewCardProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

export const PreviewCard = (props: PreviewCardProps) => {
  const { children, title, description } = props;

  const { borderColor, isDark } = useModeTheme();

  return (
    <View>
      <View
        my="lg"
        borderRadius="md"
        overflow="hidden"
        border={`1px solid ${borderColor}`}>
        <View px={4} py={3} bg={isDark ? 'gray.400' : 'gray.500'}>
          <Text color="white">• {title}</Text>
          {description ? (
            <View mt="xs" opacity=".7">
              <Text fontSize="sm" color="white">
                {description}
              </Text>
            </View>
          ) : null}
        </View>

        {children ? <View p="4">{children}</View> : null}
      </View>

      <Divider />
    </View>
  );
};
