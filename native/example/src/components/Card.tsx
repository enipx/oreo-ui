import React from 'react';
import { View, Text, useModeTheme, Divider } from '@oreo-ui/native';

interface PreviewCardProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}

export const PreviewCard = (props: PreviewCardProps) => {
  const { children, title, description } = props;

  const { borderColor } = useModeTheme();

  return (
    <View>
      <View
        my="lg"
        borderRadius="md"
        overflow="hidden"
        border={`1px solid ${borderColor}`}>
        <View px={4} py={3} bg="gray.500">
          <Text color="white">• {title}</Text>
          {description ? (
            <View mt="xs" opacity=".7">
              <Text fontSize="sm" color="white">
                {description}
              </Text>
            </View>
          ) : null}
        </View>

        <View p="4">{children}</View>
      </View>

      <Divider />
    </View>
  );
};
