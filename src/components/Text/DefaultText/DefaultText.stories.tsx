import { ComponentMeta } from '@storybook/react-native';
import { DefaultText } from './DefaultText';

export default {
  title: 'components/Text/DefaultText',
  component: DefaultText,
  args: {
    children: 'text exemple',
  },
} as ComponentMeta<typeof DefaultText>;

export const Basic: ComponentMeta<typeof DefaultText> = {};
