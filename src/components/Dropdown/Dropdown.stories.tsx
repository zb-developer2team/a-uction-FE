import type { Meta, StoryFn } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  component: Dropdown,
  title: 'components/Dropdown',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Dropdown>;

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Product = Template.bind({});
Product.args = {
  type: 'product',
};

export const Sort = Template.bind({});
Sort.args = {
  type: 'sort',
};
