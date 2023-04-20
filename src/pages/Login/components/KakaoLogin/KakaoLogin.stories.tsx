import type { Meta, StoryFn } from '@storybook/react';

import KakaoLogin from './KakaoLogin';

const meta = {
  component: KakaoLogin,
  title: 'components/KakaoLogin',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof KakaoLogin>;

export default meta;

const Template: StoryFn<typeof KakaoLogin> = (args) => <KakaoLogin {...args} />;

export const Default = Template.bind({});

Default.args = {};
