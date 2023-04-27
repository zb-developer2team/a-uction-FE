import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import RadioButton from '../../components/RadioButton/RadioButton';
import React from 'react';

export interface ProductStatusProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Status({ onChange, className }: ProductStatusProps) {
  const [status, setStatus] = useState<string>('used');

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onChange?.(value);
    console.log('selected status:', value); // 선택된 라디오 버튼의 값을 콘솔에 출력
  };

  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">상태</span>
        <div className="flex mt-2">
          <RadioButton
            type={'used'}
            checked={status === 'used'}
            onChange={() => handleStatusChange('used')}
          />
          <RadioButton
            type={'new'}
            checked={status === 'new'}
            onChange={() => handleStatusChange('new')}
          />
        </div>
      </div>
    </>
  );
}
