import { ComponentMeta } from '@storybook/react-native';
import { Folder } from '.';

export default {
  title: 'components/Folder',
  component: Folder,
  args: {
    name: 'Folder name',
    files: [
      {
        name: 'fsladkfj asdklfj lasjkdf lç',
        extension: 'mkv',
        size: 1502552,
        path: 'laskdfj',
      },
      {
        name: 'lskçafjkljdf aklçsj S03E05',
        extension: 'mkv',
        size: 1502552,
        path: 'laskdfj',
      }
    ],
    subFolders: [
      {
        name: 'legendas',
        files: [
          {
            name: 'portugues',
            extension: 'srt',
            path: 'çlfjksd',
            size: 2554,
          },
          {
            name: 'ingles',
            extension: 'srt',
            path: 'çlfjksd',
            size: 1565,
          }
        ],
        subFolders: [],
      }
    ],
  }
} as ComponentMeta<typeof Folder>;

export const Basic: ComponentMeta<typeof Folder> = {};
