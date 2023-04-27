import { twMerge } from 'tailwind-merge';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';
import LoginForm from './components/LoginForm/LoginForm';
import LoginTitle from './components/LoginTitle/LoginTitle';
import React from 'react';

export interface LoginProps {
  className?: string;
}

export default function Login({ className, ...props }: LoginProps) {
  return (
    <div
      className={twMerge(
        ` w-screen h-screen font-line-seed-sans-kr flex justify-center items-center`,
        className
      )}
      {...props}
    >
      <div>
        <LoginTitle />
        <LoginForm />
        <KakaoLogin />
      </div>
    </div>
  );
}
