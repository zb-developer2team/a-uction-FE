import type { Meta, StoryFn } from '@storybook/react';
import Link from './TextLink';

const meta = {
  component: Link,
  title: 'components/Link',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Link>;

export default meta;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const LinkLabel = Template.bind({});
LinkLabel.args = {
  url: 'https://www.naver.com',
  type: 'signUp',
};
