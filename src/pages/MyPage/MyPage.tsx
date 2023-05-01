import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Profile from '../../components/Profile/Profile';
import Participated from '../../pages/Participated/Participated';
import Registered from '../../pages/Registered/Registered';
import Purchased from '../../pages/Purchased/Purchased';

export interface MyPage {
  className?: string;
}

export interface ProductData {
  itemName: string;
  category: string;
  startPrice: string;
  price: string;
}

const dummyProducts: ProductData[] = [
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '120,000',
  },
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
];

export default function MyPage({ className }: MyPage) {
  const [selectedTab, setSelectedTab] = useState<
    '내가 참여한' | '내가 등록한' | '내가 구매한'
  >('내가 참여한');
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get('/auctions/my-auctions');
      // setProducts(response.data);

      setProducts(dummyProducts);
    };
    fetchData();
  }, []);

  const productRows: ProductData[][] = [];
  let currentRow: ProductData[] = [];
  for (let i = 0; i < products.length; i++) {
    currentRow.push(products[i]);
    if (currentRow.length === 4 || i === products.length - 1) {
      productRows.push(currentRow);
      currentRow = [];
    }
  }

  return (
    <div className={twMerge(`w-screen font-line-seed-sans-kr`)}>
      <Header type={'member'} />
      <div className="flex justify-center text-4xl font-bold mt-[100px]">
        My Page
      </div>
      <div className="flex justify-center mt-16">
        <Image
          size={'sm'}
          src={`${import.meta.env.VITE_IMAGE_PATH}/SampleImage.png`}
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
      {selectedTab === '내가 참여한' && <Participated />}
      {selectedTab === '내가 등록한' && <Registered />}
      {selectedTab === '내가 구매한' && <Purchased />}
    </div>
  );
}
