import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface CategoryDetailProps {
  category: string;
  status: string;
  description: string;
  className?: string;
}

export default function CategoryDetail({
  category,
  status,
  description,
  className,
}: CategoryDetailProps) {
  return (
    <>
      <div className={twMerge(`border-b-[1px] mt-2 py-5`)}>
        <p className="text-l mb-2">
          <span className="mr-6 font-bold">상품 카테고리</span>
          {category}
        </p>
        <p className="text-l mb-2">
          <span className="mr-6 font-bold">상태</span>
          {status}
        </p>
        <p className="text-l mb-2">
          <span className="mr-6 font-bold">설명</span>
          {description}
        </p>
      </div>
    </>
  );
}
