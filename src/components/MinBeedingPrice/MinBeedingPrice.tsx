import { twMerge } from 'tailwind-merge';
import Input from '../../components/Input/Input';

export interface MinBeedingPriceProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MinBeedingPrice({
  className,
  onChange,
}: MinBeedingPriceProps) {
  const handleBiddingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    console.log('Input 값이 변경되었습니다:', event.target.value);
    onChange && onChange(event);
  };
  return (
    <>
      <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
        <span className="text-xl font-bold mt-1 mr-10">최소비딩금액</span>
        <Input
          type={'text'}
          placeholder={'bidding'}
          imageType={'none'}
          className="border-2 rounded-lg"
          onChange={handleBiddingChange}
        />
        <span className="text-xl mt-1 ml-4">원</span>
      </div>
    </>
  );
}
