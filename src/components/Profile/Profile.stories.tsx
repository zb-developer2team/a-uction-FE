import type { Meta, StoryFn } from '@storybook/react';
import Profile from './Profile';

const meta = {
  component: Profile,
  title: 'components/Profile',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Profile>;

export default meta;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

export const MyProfile = Template.bind({});
MyProfile.args = {
  id: 'A+uction',
  deposit: '1,000,000',
  introduce: '나는야 경매왕!!',
};
