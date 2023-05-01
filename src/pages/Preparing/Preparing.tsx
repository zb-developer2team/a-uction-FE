import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import React from 'react';

export interface PreparingProps {
  className?: string;
}

export default function Preparing({ className }: PreparingProps) {
  return (
    <div
      className={twMerge(
        `w-screen flex-col justify-center items-centerfont-line-seed-sans-kr`
      )}
    >
      <Header type={'guest'} />
      <div className="h-screen flex flex-col text-5xl font-bold justify-center items-center">
        진행중인 경매가 없습니다. 🥲
      </div>
    </div>
  );
}
