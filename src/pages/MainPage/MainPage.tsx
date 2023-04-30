import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Banner from '../../assets/Banner.png';
import React from 'react';
import { useState, useEffect } from 'react';

export interface MainPageProps {
  children?: string;
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
    price: '120,000',
  },
  {
    itemName: 'Apple 정품 아이폰 14 Pro 자급제',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
];

export default function MainPage({ children, className }: MainPageProps) {
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
      <Header type={'guest'} />
      <div className={twMerge(`w-full h-[450px] overflow-hidden`)}>
        <div
          className={twMerge(
            `w-[2560px] h-[450px] absolute left-1/2 -translate-x-1/2`
          )}
        >
          <img src={Banner} className={twMerge(`h-[450px] my-0 mx-auto`)} />
        </div>
      </div>
      <div className="text-2xl font-bold mt-20 ml-10">인기 많은 경매 상품</div>
      <div className="flex absolute justify-evenly flex-wrap ml-24 mt-32 mb-10">
        {productRows.map((row, rowIndex) => (
          <div className="flex w-full z-1" key={rowIndex}>
            {row.map((product, index) => (
              <div
                className={twMerge(
                  `w-full sm:w-1/2 md:w-1/4 mb-16 ${
                    index !== row.length - 1 ? 'sm:mr-2' : ''
                  }`
                )}
                key={`product-${index}`}
              >
                <Product
                  key={index}
                  itemName={product.itemName}
                  category={product.category}
                  startPrice={product.startPrice}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
