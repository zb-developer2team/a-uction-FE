import type { Meta, StoryFn } from '@storybook/react';
import MyPage from './MyPage';

const meta = {
  component: MyPage,
  title: 'pages/MyPage',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof MyPage>;

export default meta;

const Template: StoryFn<typeof MyPage> = (args) => <MyPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
