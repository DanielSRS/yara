import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { SurfaceApp } from './App';
import { Text } from 'react-native';

export default {
  title: 'components/Atoms/Surface/App',
  component: SurfaceApp,
} as ComponentMeta<typeof SurfaceApp>;

export const surfaceApp: ComponentStory<typeof SurfaceApp> = (args) => {
  return (
    <SurfaceApp {...args}>
      <Text>With some child</Text>
    </SurfaceApp>
  );
};
