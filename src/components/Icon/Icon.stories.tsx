import type { Meta, StoryFn } from '@storybook/react';
import Icon from './Icon';

const meta = {
  component: Icon,
  title: 'components/Icon',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Icon>;

export default meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const UserIcon = Template.bind({});

UserIcon.args = {
  type: 'user',
};

export const LockIcon = Template.bind({});

LockIcon.args = {
  type: 'lock',
};

export const SearchIcon = Template.bind({});

SearchIcon.args = {
  type: 'search',
};
