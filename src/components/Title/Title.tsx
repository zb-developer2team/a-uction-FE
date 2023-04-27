import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return <div className={twMerge(`text-xl font-bold`)}>A+uction</div>;
}
