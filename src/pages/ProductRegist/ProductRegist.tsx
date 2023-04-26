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
import { token } from '../../main';
import getProductInfo, {
  PostProductInfo,
} from '../../api/ProductInfo/getProductInfo';

export interface ProductRegistProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Regist({
  className,
  onChange,
}: ProductRegistProps): JSX.Element {
  const [buttonActive, setButtonActive] = useState(true);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [minBidPrice, setMinBidPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [productInfo, setProductInfo] = useState('');
  const [status, setStatus] = useState('');
  const [startDateTime, setStartDateTime] = useState<string>('');
  const [endDateTime, setEndDateTime] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const clickHandler = async () => {
    const allInputsFilled =
      productName !== '' &&
      productPrice !== 0 &&
      minBidPrice !== 0 &&
      category !== '' &&
      productInfo !== '' &&
      status !== '' &&
      startDateTime !== '' &&
      endDateTime !== '' &&
      file !== null;
    if (!allInputsFilled) {
      alert('모든 입력값을 입력해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file ?? ''); // file은 파일 객체입니다.
    formData.append('itemName', productName);
    formData.append('itemStatus', status);
    formData.append('startingPrice', String(productPrice));
    formData.append('minimumBid', String(minBidPrice));
    formData.append('category', category);
    formData.append('startDateTime', startDateTime);
    formData.append('endDateTime', endDateTime);
    formData.append('description', productInfo);

    axios
      .post('http://3.35.38.11:8081/register/auctions', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token, // 토큰 값이 필요한 경우에는 해당 코드를 추가하여 헤더에 인증 정보를 전송
        },
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
        상품 등록
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
          onChange={(event) => setProductPrice(parseInt(event.target.value))}
        />
        <MinBeedingPrice
          onChange={(event) => setMinBidPrice(parseInt(event.target.value))}
        />
        <ProductInfo onChange={(event) => setProductInfo(event.target.value)} />
        <StartDateTime onChange={(date) => setStartDateTime(date)} />
        <EndDateTime onChange={(date) => setEndDateTime(date)} />
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
