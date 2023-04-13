import { twMerge } from 'tailwind-merge';

export interface RadioButtoProps {
  type: 'new' | 'used';
  className?: string;
}

export default function Radio({ type, className }: RadioButtoProps) {
  const productState = {
    new: '새 상품',
    used: '중고',
  };
  return (
    <div className={twMerge(`text-base font-line-seed-sans-kr`, className)}>
      <label>
        <input type="checkbox" className="mr-2 accent-Orange"></input>
        {productState[type]}
      </label>
    </div>
  );
}
