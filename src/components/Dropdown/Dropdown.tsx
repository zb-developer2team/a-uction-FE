import { twMerge } from 'tailwind-merge';
import DropdownMenu from './DropdownMenu';
import { useEffect, useState } from 'react';

export interface ImageProps {
  type: 'product' | 'sort';
  className?: string;
}

export default function Dropdown({ type, className, ...props }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const category = {
    product: '카테고리',
    sort: '정렬 방식',
  };

  const size = {
    product: 'w-[132px] h-[52px] text-lg',
    sort: 'w-[105px] h-9 text-sm',
  };

  return (
    <div className={twMerge(`font-line-seed-sans-kr`, className)}>
      <button
        className={twMerge(
          `${size[type]} bg-White rounded-lg border-2 border-DarkGray mb-2`,
          className
        )}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {category[type]}
      </button>
      {isOpen && <DropdownMenu type={type} />}
    </div>
  );
}
