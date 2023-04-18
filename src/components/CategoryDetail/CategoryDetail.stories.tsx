import type { Meta, StoryFn } from '@storybook/react';
import CategoryDetail from './CategoryDetail';

const meta = {
  component: CategoryDetail,
  title: 'components/CategoryDetail',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof CategoryDetail>;

export default meta;

const Template: StoryFn<typeof CategoryDetail> = (args) => (
  <CategoryDetail {...args} />
);

export const Detail = Template.bind({});

Detail.args = {
  category: '미술품',
  status: '새상품',
  description: '너무 좋은 신상인데 눈물을 머금고 경매합니다.',
};
