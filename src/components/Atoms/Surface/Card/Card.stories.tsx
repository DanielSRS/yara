import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { SurfaceCard } from './Card';
import { Text } from 'react-native';

export default {
  title: 'components/Atoms/Surface/Card',
  component: SurfaceCard,
} as ComponentMeta<typeof SurfaceCard>;

export const surfaceCard: ComponentStory<typeof SurfaceCard> = (args) => {
  return (
    <SurfaceCard {...args}>
      <Text>With some child</Text>
    </SurfaceCard>
  );
};
