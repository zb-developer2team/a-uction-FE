import { twMerge } from 'tailwind-merge';
import axios from 'axios';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import React from 'react';
import { useEffect, useState } from 'react';
import { token } from '../../main';
import Preparing from '../Preparing/Preparing';
import Dropdown from '../../components/Dropdown/Dropdown';
import { Link } from 'react-router-dom';

export interface SearchPageProps {
  className?: string;
}

export interface ProductData {
  auctionId: string | number;
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
          'https://dev2team-server.site/auctions/listAll?status=SCHEDULED',
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
        <Preparing>예정된 경매가 없습니다. 🥲</Preparing>
      ) : (
        <>
          <Header type={'guest'} />
          <div className="text-3xl font-bold mt-[100px] ml-[50px]">
            총 {count}건이 예정되어 있습니다.
          </div>
          <div
            className={twMerge(
              `flex justify-end absolute mt-10 right-0 mr-20 z-50`
            )}
          >
            <Dropdown type={'sort'} />
          </div>
          <div>
            <div className="flex justify-evenly flex-wrap ml-24 mt-32 mb-10">
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
                      <Link to={`/detail/${product.auctionId}`}>
                        <Product
                          auctionId={product.auctionId}
                          key={index}
                          itemName={product.itemName}
                          category={product.category}
                          startingPrice={product.startingPrice}
                          price={'90000'}
                          imagesSrc={product.imagesSrc}
                        />
                      </Link>
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
