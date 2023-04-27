import { twMerge } from 'tailwind-merge';
import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';
import { useState } from 'react';
import React from 'react';

export interface DropdownProps extends DropdownMenuProps {
  type: 'product' | 'sort';
  className?: string;
}

export default function Dropdown({ type, className, ...props }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const category = {
    product: '카테고리',
    sort: '정렬 방식',
  };

  const size = {
    product: 'w-[132px] h-[52px] text-lg',
    sort: 'w-[105px] h-9 text-sm',
  };

  const dropdownClick = (item: string) => {
    setSelectedCategory(item);
    setIsOpen(false);
    if (props.onDropdownClick) {
      props.onDropdownClick(item);
    }
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
        {selectedCategory || category[type]}
      </button>
      {isOpen && <DropdownMenu type={type} onDropdownClick={dropdownClick} />}
    </div>
  );
}
