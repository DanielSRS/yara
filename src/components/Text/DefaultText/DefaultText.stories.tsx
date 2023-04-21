import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { DefaultText } from './DefaultText';

export default {
  title: 'components/Text/DefaultText',
  component: DefaultText,
  args: {
    children: 'text exemple',
  },
} as ComponentMeta<typeof DefaultText>;

export const Basic: ComponentMeta<typeof DefaultText> = {};


