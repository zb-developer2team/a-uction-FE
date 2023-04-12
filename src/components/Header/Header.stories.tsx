import type { Meta, StoryFn } from '@storybook/react';

import Header from './Header';
import HeaderTop from './HeaderTop';

const meta = {
  component: Header,
  title: 'components/Header',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Header>;

export default meta;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const Guest = Template.bind({});
Guest.args = {
  type: 'guest',
};

export const Member = Template.bind({});
Member.args = {
  type: 'member',
};
