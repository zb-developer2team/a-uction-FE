import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

export interface RadioButtoProps {
  type: 'used' | 'new';
  className?: string;
}

export default function Radio({ type, className }: RadioButtoProps) {
  const [radioButton, setRadioButton] = useState('');
  const productState = {
    used: '중고',
    new: '새 상품',
  };

  const radioButtonHandler = () => {
    setRadioButton(type);
  };

  return (
    <div className={twMerge(`text-base font-line-seed-sans-kr`, className)}>
      <input
        type="radio"
        name="radioButton"
        checked={radioButton === type}
        onChange={radioButtonHandler}
        className="mr-2 appearance-none w-3 h-3 rounded-full ring-1 ring-Orange checked:bg-Orange checked:border-2 checked:border-White"
      ></input>
      <label className="mr-10">중고</label>
      <input
        type="radio"
        name="radioButton"
        checked={radioButton === type}
        onChange={radioButtonHandler}
        className="mr-2 appearance-none w-3 h-3 rounded-full ring-1 ring-Orange checked:bg-Orange checked:border-2 checked:border-White"
      ></input>
      <label>새 상품</label>
    </div>
  );
}
