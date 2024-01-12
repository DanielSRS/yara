import { ComponentMeta } from '@storybook/react-native';
import { Caption } from './Caption';

export default {
  title: 'components/Text/Caption',
  component: Caption,
  args: {
    children: 'text exemple',
  },
} as ComponentMeta<typeof Caption>;

export const Basic: ComponentMeta<typeof Caption> = {};
