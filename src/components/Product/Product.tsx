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
        `w-[240px] h-[369.5px] font-line-seed-sans-kr`,
        className
      )}
    >
      <Image
        size={'sm'}
        src={'/src/assets/SampleImage.png'}
        alt={'상품 이미지 입니다.'}
      />
      <div className="ml-2">
        <h1
          className={twMerge(
            `absolute text-lg mt-1 font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`
          )}
        >
          A+uction 제품
        </h1>
        <p className="absolute mt-10 text-Gray text-base font-bold">
          {category}
        </p>
        <p className="absolute mt-[72px] text-base font-bold">
          시작가 : {startPrice}원
        </p>
        <p className="absolute mt-[102px] text-base font-bold">
          현재가 : <span className="text-Red">{price}원</span>
        </p>
      </div>
    </div>
  );
}
