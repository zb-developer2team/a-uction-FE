import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';

export interface ProductProps {
  category: string;
  startPrice: string;
  price: string;
  className?: string;
}

export default function Product({
  category,
  startPrice,
  price,
  className,
}: ProductProps) {
  return (
    <div
      className={twMerge(
        `w-[240px] font-line-seed-sans-kr cursor-pointer`,
        className
      )}
    >
      <Image
        size={'sm'}
        src={'/src/assets/SampleImage.png'}
        alt={'상품 이미지 입니다.'}
      />
      <div className="ml-2">
        <h2 className={twMerge(`text-lg mt-1 font-bold`)}>A+uction 제품</h2>
        <p className="text-Gray text-base font-bold">{category}</p>
        <p className="text-base font-bold">시작가 : {startPrice}원</p>
        <p className="text-base font-bold">
          현재가 : <span className="text-Red">{price}원</span>
        </p>
      </div>
    </div>
  );
}
