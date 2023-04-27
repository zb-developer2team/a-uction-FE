import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ProductTimeProps {
  remainTime: string;
  auctionPeriod: string;
  className?: string;
}

export default function ProductTime({
  remainTime,
  auctionPeriod,
  className,
}: ProductTimeProps) {
  return (
    <>
      <div className={twMerge(`border-b-[1px] py-5`)}>
        <p className="text-l mb-2 flex justify-between">
          <span className="mr-6 font-bold">남은시간</span>
          <span className="text-Red font-bold">{remainTime}</span>
        </p>
        <p className="text-l mb-2 flex justify-between">
          <span className="mr-6 font-bold">경매기간</span>
          <span>{auctionPeriod}</span>
        </p>
      </div>
    </>
  );
}
