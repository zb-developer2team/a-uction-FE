import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';

export interface ProductNameProps {
  className?: string;
}

export default function Name({ className }: ProductNameProps) {
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl mt-1 font-bold">상품 이름</span>
        <Input
          type={'search'}
          placeholder={'productName'}
          imageType={'none'}
          className="ml-10"
        />
      </div>
    </>
  );
}
