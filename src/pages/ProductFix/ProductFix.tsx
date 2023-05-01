import axios from 'axios';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ImageRegist from '../../components/ImageRegist/ImageRegist';
import ProductName from '../../components/ProductName/ProductName';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import ProductStatus from '../../components/ProductStatus/ProductStatus';
import ProductStartPrice from '../../components/ProductStartPrice/ProductStartPrice';
import MinBeedingPrice from '../../components/MinBeedingPrice/MinBeedingPrice';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Button from '../../components/Button/Button';
import StartDateTime from '../../components/StartDateTime/StartDateTime';
import EndDateTime from '../../components/EndDateTime/EndDateTime';
import { useProductInfoQuery } from '../../queries/useProductInfoQuery';
import getFixInfo, { PostFixInfo } from '../../api/ProductInfo/getFixInfo';
import { token } from '../../main';
import React from 'react';

export interface ProductFixProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Regist({
  className,
  onChange,
}: ProductFixProps): JSX.Element {
  const [buttonActive, setButtonActive] = useState(true);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [minBidPrice, setMinBidPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [productInfo, setProductInfo] = useState('');
  const [status, setStatus] = useState('');
  const [startDateTime, setStartDateTime] = useState<string>('');
  const [endDateTime, setEndDateTime] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (startDateTime && endDateTime) {
      const startTime = new Date(startDateTime).getTime();
      const endTime = new Date(endDateTime).getTime();
      if (endTime <= startTime) {
        setErrorMessage('입력된 날짜가 경매시작시간 보다 이전입니다.');
        setButtonActive(false);
      } else {
        setErrorMessage('');
        setButtonActive(true);
      }
    }
  }, [startDateTime, endDateTime]);

  const clickHandler = async () => {
    const allInputsFilled =
      productName !== '' &&
      productPrice !== 0 &&
      minBidPrice !== 0 &&
      category !== '' &&
      productInfo !== '' &&
      status !== '' &&
      startDateTime !== '' &&
      endDateTime !== '';
    if (!allInputsFilled) {
      alert('모든 입력값을 입력해주세요.');
      return;
    }

    getFixInfo({
      itemName: productName,
      itemStatus: status,
      startingPrice: productPrice ?? 0,
      minimumBid: minBidPrice,
      category: category,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
      description: productInfo,
    })
      .then((response) => {
        console.log(response);
        // navigate('/mypage'); // TODO CHANGE: 정상적으로 api를 응답받았을 경우 여기서 navigate 사용
      })
      .catch((error) => {
        console.error(error);
        // TODO: 에러 처리를 추가합니다.
      });
    navigate('/mypage'); // 일시적으로 사용
  };

  return (
    <div className={twMerge(`font-line-seed-sans-kr`)}>
      <Header type={'member'} />
      <div
        className={twMerge(
          `w-screen flex justify-center text-4xl font-bold mt-16 mb-16`
        )}
      >
        상품 수정
      </div>
      <div className={twMerge(`w-screen h-screen ml-10`)}>
        <ImageRegist
          onImageUploaded={(imageFilePath) =>
            setFile(imageFilePath as unknown as File | null)
          }
        />
        <ProductName onChange={(event) => setProductName(event.target.value)} />
        <ProductCategory onChange={(item) => setCategory(item)} />
        <ProductStatus onChange={(value) => setStatus(value)} value={status} />
        <ProductStartPrice
          onChange={(currentNumber) => setProductPrice(currentNumber)}
        />
        <MinBeedingPrice
          onChange={(currentNumber) => setMinBidPrice(currentNumber)}
        />
        <ProductInfo onChange={(event) => setProductInfo(event.target.value)} />
        <StartDateTime onChange={(date) => setStartDateTime(date)} />

        <div className={twMerge('flex ')}>
          <EndDateTime onChange={(date) => setEndDateTime(date)} />
          {errorMessage && (
            <span className="mt-8 pl-8 text-Red">{errorMessage}</span>
          )}
        </div>

        <div className={twMerge(`flex justify-center h-[200px] mt-14 mb-14`)}>
          <Button
            type={'active'}
            size={'xlarge'}
            label={'수정하기'}
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
}