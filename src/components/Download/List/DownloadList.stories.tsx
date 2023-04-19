import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { DownloadList } from './DownloadList';

export default {
  title: 'components/DownloadList',
  component: DownloadList,
  args: {
    downloads: ['t1', 't2', 't3', 't4', 't5']
  },
} as ComponentMeta<typeof DownloadList>;

export const Basic: ComponentMeta<typeof DownloadList> = {};


