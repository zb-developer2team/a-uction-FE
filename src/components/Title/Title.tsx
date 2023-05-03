import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TitleProps {
  className?: string;
  children?: string;
}

export default function Title({ className, children }: TitleProps) {
  return <div className={twMerge(`text-xl font-bold`)}>{children}</div>;
}
