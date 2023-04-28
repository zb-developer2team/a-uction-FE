import type { Meta, StoryFn } from '@storybook/react';
import SearchPage from './SearchPage';

const meta = {
  component: SearchPage,
  title: 'pages/SearchPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof SearchPage>;

export default meta;

const Template: StoryFn<typeof SearchPage> = (args) => <SearchPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
