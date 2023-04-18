import type { Meta, StoryFn } from '@storybook/react';
import Title from './Title';

const meta = {
  component: Title,
  title: 'components/Title',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Title>;

export default meta;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const ProductTitle = Template.bind({});
ProductTitle.args = {};
