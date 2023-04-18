import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';

export interface ProductInfoProps {
  className?: string;
}

export default function ProductInfo({ className }: ProductInfoProps) {
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">설명</span>
        <Input
          type={'search'}
          placeholder={'info'}
          imageType={'none'}
          className="border-2 rounded-lg"
        />
      </div>
    </>
  );
}
