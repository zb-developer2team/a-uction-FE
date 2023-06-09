import { twMerge } from 'tailwind-merge';
import { useState, useEffect } from 'react';
import DropdownItem from './DropdownItem';
import React from 'react';

export interface DropdownMenuProps {
  type: 'product' | 'sort';
  className?: string;
  onDropdownClick?: (item: string) => void;
}

export default function DropdownMenu({
  type,
  className,
  onDropdownClick,
  ...props
}: DropdownMenuProps) {
  const category = {
    product: ['CLOTHES', 'SHOES', 'BAG', 'ARTWORK', 'ETC'],
    sort: ['시작일', '종료일', '시작금액'],
  };

  const size = {
    product: 'w-[132px] text-lg',
    sort: 'w-[105px] text-sm',
  };

  const height = {
    product: 'h-[52px] leading-[52px]',
    sort: 'h-9 leading-[36px]',
  };

  const dropdownClick = (item: string) => {
    if (onDropdownClick) {
      onDropdownClick(item);
    }
  };

  return (
    <ul
      className={twMerge(
        `${size[type]} rounded-lg border-2 border-DarkGray overflow-hidden`,
        className
      )}
      {...props}
      // key={`DropdownMenu-${keyPrefix}`}
    >
      {category[type].map((item, index) => (
        <DropdownItem
          key={item}
          className={twMerge(`${height[type]}`)}
          onDropdownClick={() => dropdownClick(item)}
        >
          {item}
        </DropdownItem>
      ))}
    </ul>
  );
}
