import { twMerge } from 'tailwind-merge';
import SampleImage from '../../assets/SampleImage.png';
import Icon from '../Icon/Icon';
import React from 'react';

export interface ImageButtonProps {
  src: string;
  type: 'empty' | 'image';
  className?: string;
}

export default function ImageButton({
  src,
  type,
  className,
  ...props
}: ImageButtonProps) {
  return (
    <div>
      {type === 'image' ? (
        <img
          src={SampleImage}
          className={twMerge('w-[50px] h-[50px] rounded-full')}
        />
      ) : (
        <div
          className={twMerge(
            'w-[50px] h-[50px] bg-White border-Orange border-2 rounded-full flex justify-center items-center'
          )}
        >
          <Icon type="user" className={twMerge('w-[30px] h-[30px]')} />
        </div>
      )}
    </div>
  );
}
