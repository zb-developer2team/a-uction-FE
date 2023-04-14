import type { Meta, StoryFn } from '@storybook/react';
import MainPage from './MainPage';

const meta = {
  component: MainPage,
  title: 'pages/MainPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof MainPage>;

export default meta;

const Template: StoryFn<typeof MainPage> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});

Default.args = {};
