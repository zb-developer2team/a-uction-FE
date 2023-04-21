import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';

export interface ProductCategoryProps {
  className?: string;
}

export default function Category({ className }: ProductCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleDropdownClick = (item: string) => {
    setSelectedCategory(item);
    console.log('Selected Category:', item);
  };

  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">카테고리</span>
        <Dropdown
          type={'product'}
          className="z-50"
          onDropdownClick={handleDropdownClick}
        />
      </div>
    </>
  );
}
