import { twMerge } from 'tailwind-merge';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '../../recoil/atom';

export interface HeaderProps {
  type: 'guest' | 'member';
  className?: string;
}

export default function Header({ type, className, ...props }: HeaderProps) {
  const isLogin = useRecoilValue(isLoginState);

  return (
    <div className={twMerge(`font-line-seed-sans-kr`, className)} {...props}>
      <HeaderTop type={isLogin ? 'member' : 'guest'} />
      <HeaderNav type={isLogin ? 'member' : 'guest'} />
    </div>
  );
}
