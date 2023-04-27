import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ImageProps {
  src: string;
  alt: string;
  size?: 'sm' | 'lg';
  className?: string;
}

export default function Image({
  src,
  alt,
  size = 'sm',
  className,
  ...props
}: ImageProps) {
  const imageSize = {
    sm: 'w-60 h-60',
    lg: 'w-[396px] h-[396px]',
  };
  return (
    <div className={twMerge(`${imageSize[size]} bg-LightGray`, className)}>
      <img
        src={`${src}`}
        alt={`${alt}`}
        className={twMerge(`${imageSize[size]} bg-LightGray`, className)}
        {...props}
      />
    </div>
  );
}
