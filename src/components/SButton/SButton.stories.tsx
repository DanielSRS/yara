// stories/MyButton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SButtonProps, SMButton } from './SButton';

export default {
  title: 'components/SButton',
  component: SMButton,
} as ComponentMeta<typeof SMButton>;

export const Basic: ComponentStory<typeof SMButton> = (args: SButtonProps) => (
  <SMButton {...args} />
);

Basic.args = {
  text: 'Olha só',
  color: 'purple',
};

export const ZutroExample = {
  args: {
    text: 'Outro ex',
  },
};
