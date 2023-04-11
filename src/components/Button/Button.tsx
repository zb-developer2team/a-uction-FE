import React from 'react';
import { twMerge } from 'tailwind-merge';
import tailwindConfig from '../../../tailwind.config';

export interface ButtonProps {
  className: string;
  label: string;
  type: 'abled' | 'disabled';
  size: 'basic' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  color: 'Orange' | 'Red' | 'Bluegreen';
  onClick: () => void;
}

export default function Button({
  className,
  label,
  type,
  size,
  color,
  onClick,
  ...props
}: ButtonProps) {
  const isDisabled = type === 'disabled';
  const handleClick = () => {
    if (!isDisabled) {
      onClick();
    }
  };

  const buttonSize = {
    basic: 'w-[150px] h-[60px]',
    xsmall: 'w-[80px] h-[30px]',
    small: 'w-[120px] h-[50px]',
    medium: 'w-[360px] h-[40px]',
    large: 'w-[280px] h-[80px]',
    xlarge: 'w-[600px] h-[80px]',
  };

  const buttonColor = {
    Orange:
      'bg-Orange hover:bg-White hover:text-Orange hover:border-2 border-Orange',
    Red: 'bg-Red hover:bg-White hover:text-Red hover:border-2 border-Red',
    Bluegreen:
      'bg-Bluegreen hover:bg-White hover:text-Bluegreen hover:border-2 border-Bluegreen',
  };

  return (
    <div className={twMerge(`${buttonSize[size]}`, className)}>
      <button
        className={twMerge(
          `${buttonSize[size]} font-bold text-base text-white rounded-lg font-line-seed-sans-kr`,
          buttonColor[color],
          className,
          isDisabled
            ? 'bg-LightGray text-DarkGray text-base font-bold font-line-seed-sans-kr cursor-not-allowed pointer-events-none'
            : ''
        )}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
}
