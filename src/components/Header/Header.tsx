import { twMerge } from 'tailwind-merge';
import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import React from 'react';

export interface HeaderProps {
  type: 'guest' | 'member';
  className?: string;
}

export default function Header({ type, className, ...props }: HeaderProps) {
  return (
    <div className={twMerge(`font-line-seed-sans-kr`, className)} {...props}>
      <HeaderTop type={type} />
      <HeaderNav type={type} />
    </div>
  );
}
