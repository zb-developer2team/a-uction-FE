import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';

export interface ProductStartPriceProps {
  className?: string;
}

export default function ProductStartPrice({
  className,
}: ProductStartPriceProps) {
  return (
    <>
      {' '}
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">시작가</span>
        <Input
          type={'text'}
          placeholder={'startPrice'}
          imageType={'none'}
          className="border-2 rounded-lg"
        />
        <span className="text-xl mt-1 ml-4">원</span>
      </div>
    </>
  );
}
