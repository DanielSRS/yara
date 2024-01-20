import { ComponentMeta } from '@storybook/react-native';
import { FileList } from './FileList';

export default {
  title: 'components/FileList',
  component: FileList,
  args: {
    files: [
      {
        fileName: 'Arquivo 1',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 2',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 3',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 4',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 5',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 6',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
      {
        fileName: 'Arquivo 7',
        fileType: 'txt',
        progress: 0,
        size: 10,
        status: 'downloading',
      },
    ],
  },
} as ComponentMeta<typeof FileList>;

export const Basic: ComponentMeta<typeof FileList> = {};
