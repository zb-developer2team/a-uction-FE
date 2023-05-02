import axios from 'axios';
import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import Product from '../../components/Product/Product';
import Preparing from '../../pages/Preparing/Preparing';

import { useEffect, useState } from 'react';
import { token } from '../../main';

export interface SearchPageProps {
  className?: string;
}

export interface ProductData {
  itemName: string;
  category: string;
  startingPrice: string;
  price: string;
  imagesSrc: string[];
}

export default function SearchPage({ className }: Partial<SearchPageProps>) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dev2team-server.site/auctions/listAll?status=PROCEEDING',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.content.length === 0) {
          setError('NOT_FOUND_AUCTION_STATUS_LIST');
        } else {
          setProducts(response.data.content);
          setCount(response.data.content.length);
        }
      } catch (err: any) {
        setError(err.response?.data?.errorCode || 'UNKNOWN_ERROR');
      }
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
    <div>
      {error ? (
        <Preparing>진행 중인 경매가 없습니다. 🥲</Preparing>
      ) : (
        <>
          <div className="text-3xl font-bold mt-[100px] ml-[50px]">
            총 {count}건이 검색되었습니다.
          </div>
          <div className="relative">
            <div
              className={twMerge(
                `flex justify-end absolute mt-10 right-0 mr-20 z-50`
              )}
            >
              <Dropdown type={'sort'} />
            </div>
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
                        startingPrice={product.startingPrice}
                        price={product.price}
                        imagesSrc={product.imagesSrc}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
