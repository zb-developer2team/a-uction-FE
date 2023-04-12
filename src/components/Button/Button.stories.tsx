import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Button>;

export default meta;

const OrangeButton: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const SignIn = OrangeButton.bind({});
SignIn.args = {
  type: 'active',
  size: 'medium',
  label: '로그인',
};

export const SignIn_Disabled = OrangeButton.bind({});
SignIn_Disabled.args = {
  type: 'disabled',
  size: 'medium',
  label: '로그인',
};

export const SignUp = OrangeButton.bind({});
SignUp.args = {
  type: 'active',
  size: 'medium',
  label: '회원가입',
};

export const SignUp_Disabled = OrangeButton.bind({});
SignUp_Disabled.args = {
  type: 'disabled',
  size: 'medium',
  label: '회원가입',
};

export const Login = OrangeButton.bind({});
Login.args = {
  type: 'active',
  size: 'small',
  label: '로그인',
};

const SmallOrangeButton: StoryFn<typeof Button> = (args) => (
  <Button className="text-sm" {...args} />
);

export const Certification = SmallOrangeButton.bind({});
Certification.args = {
  type: 'active',
  size: 'xsmall',
  label: '인증하기',
};

export const Certification_Didsabled = SmallOrangeButton.bind({});
Certification_Didsabled.args = {
  type: 'disabled',
  size: 'xsmall',
  label: '인증하기',
};

const RedButton: StoryFn<typeof Button> = (args) => (
  <Button className="bg-Red" {...args} />
);

export const Charge = RedButton.bind({});
Charge.args = {
  type: 'active',
  size: 'small',
  label: '충전하기',
};

const BluegreenButton: StoryFn<typeof Button> = (args) => (
  <Button
    className="bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 hover:border-Bluegreen text-2xl"
    {...args}
  />
);

export const Bidding = BluegreenButton.bind({});
Bidding.args = {
  type: 'active',
  size: 'large',
  label: '응찰하기',
};

export const Auction = BluegreenButton.bind({});
Auction.args = {
  type: 'active',
  size: 'xlarge',
  label: '경매 참여하기',
};
