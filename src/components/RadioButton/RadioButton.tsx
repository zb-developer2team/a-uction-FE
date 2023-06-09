import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import React from 'react';

export interface RadioButtoProps {
  type: 'good' | 'best' | 'bad';
  className?: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function Radio({
  type,
  checked,
  onChange,
  className,
}: RadioButtoProps) {
  const [radioButton, setRadioButton] = useState('');
  const productState = {
    good: 'GOOD',
    best: 'BEST',
    bad: 'BAD',
  };

  const radioButtonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type);
  };

  return (
    <div className={twMerge(`text-base font-line-seed-sans-kr`, className)}>
      <input
        type="radio"
        name="radioButton"
        value={type}
        checked={checked}
        onChange={radioButtonHandler}
        className="mr-2 appearance-none w-3 h-3 rounded-full ring-1 ring-Orange checked:bg-Orange checked:border-2 checked:border-White"
      ></input>
      <label className="mr-10">{productState[type]}</label>
    </div>
  );
}
