import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Profile from '../../components/Profile/Profile';
import Product from '../../components/Product/Product';

export interface MyPage {
  className?: string;
}

export default function MyPage({ className }: MyPage) {
  const [selectedTab, setSelectedTab] = useState('내가 참여한');

  const products = [
    { category: '미술품', startPrice: '50,000', price: '60,000' },
    { category: '가구', startPrice: '100,000', price: '120,000' },
    { category: '디지털', startPrice: '200,000', price: '250,000' },
    { category: '의류', startPrice: '30,000', price: '35,000' },
  ];

  return (
    <div className={twMerge(`w-screen font-line-seed-sans-kr`)}>
      <Header type={'member'} />
      <div className="flex justify-center text-4xl font-bold mt-[100px]">
        My Page
      </div>
      <div className="flex justify-center mt-16">
        <Image
          size={'sm'}
          src={'/src/assets/SampleImage.png'}
          alt={'프로필 사진 입니다.'}
        />
        <Profile
          id={'루피'}
          deposit={'10,000,000'}
          introduce={'경매왕 루피'}
          className="ml-10"
        />
      </div>
      <div className="flex justify-center text-4xl font-bold mt-[100px]">
        경매 List
      </div>
      <div className="flex justify-center text-lg font-bold mt-4">
        <ul className="flex">
          <li
            className={`cursor-pointer ${
              selectedTab === '내가 참여한' ? 'text-Red' : ''
            }`}
            onClick={() => setSelectedTab('내가 참여한')}
          >
            내가 참여한
          </li>
          <span className="ml-6 mr-6">|</span>
          <li
            className={`cursor-pointer ${
              selectedTab === '내가 등록한' ? 'text-Red' : ''
            }`}
            onClick={() => setSelectedTab('내가 등록한')}
          >
            내가 등록한
          </li>
          <span className="ml-6 mr-6">|</span>
          <li
            className={`cursor-pointer ${
              selectedTab === '내가 구매한' ? 'text-Red' : ''
            }`}
            onClick={() => setSelectedTab('내가 구매한')}
          >
            내가 구매한
          </li>
        </ul>
      </div>
      <div className="flex justify-evenly mt-10 mb-10">
        {products.map((product, index) => (
          <Product
            key={index}
            category={product.category}
            startPrice={product.startPrice}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
