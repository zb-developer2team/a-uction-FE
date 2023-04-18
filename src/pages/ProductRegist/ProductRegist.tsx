import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ImageRegist from '../../components/ImageRegist/ImageRegist';
import ProductName from '../../components/ProductName/ProductName';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ProductStatus from '../../components/ProductStatus/ProductStatus';
import ProductStartPrice from '../../components/ProductStartPrice/ProductStartPrice';
import MinBeedingPrice from '../../components/MinBeedingPrice/MinBeedingPrice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Button from '../../components/Button/Button';

export interface ProductRegistProps {
  className?: string;
}

export default function Regist({ className }: ProductRegistProps): JSX.Element {
  const [buttonActive, setButtonActive] = useState(true);

  const clickHandler = () => {
    setButtonActive(false);
  };

  return (
    <div className={twMerge(`font-line-seed-sans-kr`)}>
      <Header type={'member'} />
      <div
        className={twMerge(
          `w-screen flex justify-center text-4xl font-bold mt-16 mb-16`
        )}
      >
        상품 등록
      </div>
      <div className={twMerge(`w-screen h-screen ml-10`)}>
        <ImageRegist />
        <ProductName />
        <ProductCategory />
        <ProductStatus />
        <ProductStartPrice />
        <MinBeedingPrice />
        <ProductInfo />
        <div className={twMerge(`flex justify-center h-[200px] mt-14 mb-14`)}>
          <Button
            type={'active'}
            size={'xlarge'}
            label={'등록하기'}
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
}
