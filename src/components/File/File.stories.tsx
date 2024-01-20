import { ComponentMeta } from '@storybook/react-native';
import { File } from './File';

export default {
  title: 'components/File',
  component: File,
  args: {
    fileName:
      'arquivo de exemplo com um nome estupidamente longo que ninguem vai ler em hopotese nenhuma',
    fileType: 'exe',
    progress: 10,
    size: 10,
    status: 'downloading',
  },
  argTypes: {
    onPress: { action: 'onPress' },
  },
} as ComponentMeta<typeof File>;

export const Basic: ComponentMeta<typeof File> = {};
