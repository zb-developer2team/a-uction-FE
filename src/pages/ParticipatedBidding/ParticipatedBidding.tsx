import { twMerge } from 'tailwind-merge';

import Image from '../../components/Image/Image';
import React from 'react';

export interface ParticipatedBiddingProps {
  className?: string;
}

export default function ParticipatedBidding({
  className,
}: ParticipatedBiddingProps) {
  return (
    <div
      className={twMerge(
        `w-screen flex-col justify-center items-centerfont-line-seed-sans-kr`
      )}
    >
      <div className="h-screen flex flex-col text-5xl font-bold justify-center items-center">
        내가 참여한 경매가 없습니다. 🥲
      </div>
    </div>
  );
}
