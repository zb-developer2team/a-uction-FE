import { prependOnceListener } from 'process';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import tailwindConfig from '../../../tailwind.config';

export interface LinkProps {
  url: string;
  type: 'signUp' | 'logIn';
  className: string;
}

export default function Link({ url, type, className, ...props }: LinkProps) {
  const status = {
    signUp: {
      description: '아직 회원이 아니신가요?',
      label: '회원가입',
    },
    logIn: {
      description: '이미 회원이신가요?',
      label: '로그인',
    },
  };
  return (
    <div>
      <span className="text-base text-Gray mr-2 font-line-seed-sans-kr">
        {status[type].description}
      </span>
      <a
        href={url}
        className="text-base text-Orange underline decoration-solid underline-offset-4 decoration-2 font-line-seed-sans-kr"
      >
        {status[type].label}
      </a>
    </div>
  );
}
