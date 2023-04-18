import { twMerge } from 'tailwind-merge';
import RadioButton from '../../components/RadioButton/RadioButton';

export interface ProductStatusProps {
  className?: string;
}

export default function Status({ className }: ProductStatusProps) {
  return (
    <>
      {' '}
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">상태</span>
        <div className="flex mt-2">
          <RadioButton type={'used'} />
        </div>
      </div>
    </>
  );
}
