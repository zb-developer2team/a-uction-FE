import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import RadioButton from '../../components/RadioButton/RadioButton';

export interface ProductRegistProps {
  className?: string;
}

export default function Regist({ className }: ProductRegistProps) {
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
        <div className={twMerge(`flex h-[340px] border-b-[1px]`)}>
          <span className="text-xl font-bold">사진 등록</span>
          <div className="flex flex-col items-center ml-10">
            <Image
              size={'sm'}
              src={'/src/assets/SampleImage.png'}
              alt={'상품 이미지 입니다.'}
            />
            <Button
              type={'active'}
              size={'xsmall'}
              label={'등록하기'}
              onClick={clickHandler}
              className="text-sm mt-4"
            />
          </div>
        </div>
        <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
          <span className="text-xl mt-1 font-bold">상품 이름</span>
          <Input
            type={'search'}
            placeholder={'productName'}
            imageType={'none'}
            className="ml-10"
          />
        </div>
        <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
          <span className="text-xl font-bold mt-1 mr-10">카테고리</span>
          <Dropdown type={'product'} className="z-50" />
        </div>
        <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
          <span className="text-xl font-bold mt-1 mr-10">상태</span>
          <div className="flex mt-2">
            <RadioButton type={'used'} />
          </div>
        </div>
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
        <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
          <span className="text-xl font-bold mt-1 mr-10">최소비딩금액</span>
          <Input
            type={'text'}
            placeholder={'bidding'}
            imageType={'none'}
            className="border-2 rounded-lg"
          />
          <span className="text-xl mt-1 ml-4">원</span>
        </div>
        <div className={twMerge(`flex h-[74px] border-b-[1px] mt-6`)}>
          <span className="text-xl font-bold mt-1 mr-10">설명</span>
          <Input
            type={'search'}
            placeholder={'searchProduct'}
            imageType={'none'}
            className="border-2 rounded-lg"
          />
        </div>
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
