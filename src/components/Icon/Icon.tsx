import { twMerge } from 'tailwind-merge';
import user from '../../assets/user.png';
import lock from '../../assets/lock.png';
import search from '../../assets/search.png';
import React from 'react';

export interface IconProps {
  type: 'user' | 'lock' | 'search';
  className: string;
}

export default function Icon({ type, className, ...props }: IconProps) {
  const icons = {
    user,
    lock,
    search,
  };

  return (
    <div className={twMerge(className)}>
      <img
        src={icons[type]}
        className={twMerge('w-[30px] h-[30px]', className)}
        {...props}
      />
    </div>
  );
}
