import { twMerge } from 'tailwind-merge';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignUpTitle from './components/SignUpTitle/SignUpTitle';
import React from 'react';

export interface LoginProps {
  className?: string;
}

export default function SignUp({ className, ...props }: LoginProps) {
  return (
    <div
      className={twMerge(
        ` w-screen h-screen font-line-seed-sans-kr flex justify-center items-center`,
        className
      )}
      {...props}
    >
      <div>
        <SignUpTitle />
        <SignUpForm />
      </div>
    </div>
  );
}
