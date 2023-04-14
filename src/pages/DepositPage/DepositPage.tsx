import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

export interface DepositPageProps {
  deposit: string;
  className?: string;
}

export default function DepositPage({ deposit, className }: DepositPageProps) {
  const [buttonActive, setButtonActive] = useState(true);

  const clickHandler = () => {
    setButtonActive(false);
  };

  return (
    <div className="w-screen h-screen">
      <Header type={'member'} />
      <div className="flex justify-center text-4xl font-bold mt-[100px]">
        현재 예치금
      </div>
      <div className="flex justify-center text-2xl text-DarkGray font-bold mt-8">
        <span>{deposit}</span>
        <span>원</span>
      </div>
      <div className="flex justify-center mt-6">
        <Button
          size={'small'}
          label={'충전하기'}
          type={'active'}
          onClick={clickHandler}
          className="bg-Red mr-4"
        />
        <Button
          size={'small'}
          label={'환급하기'}
          type={'active'}
          onClick={clickHandler}
          className="bg-Red ml-4"
        />
      </div>
      <div className="flex justify-center text-4xl font-bold mt-[100px]">
        History
      </div>
    </div>
  );
}
