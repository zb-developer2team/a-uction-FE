import type { Meta, StoryFn } from '@storybook/react';
import ProductDetail from './ProductDetail';

const meta = {
  component: ProductDetail,
  title: 'components/ProductDetail',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof ProductDetail>;

export default meta;

const Template: StoryFn<typeof ProductDetail> = (args) => (
  <ProductDetail {...args} />
);

export const Detail = Template.bind({});

Detail.args = {
  category: '미술품',
  status: '새상품',
  description: '너무 좋은 신상인데 눈물을 머금고 경매합니다.',
  remainTime: '2일 5시간 33분',
  auctionPeriod: '2023.04.03 10:00 ~ 2023.04.05 15:33',
  price: '60,000원',
  startPrice: '50,000원',
};
