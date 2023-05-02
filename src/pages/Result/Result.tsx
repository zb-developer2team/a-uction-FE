import { twMerge } from 'tailwind-merge';
import axios from 'axios';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import React from 'react';
import { useEffect, useState } from 'react';
import { token } from '../../main';
import Image from '../../components/Image/Image';
import Preparing from '../Preparing/Preparing';

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
          'https://dev2team-server.site/auctions/listAll?status=COMPLETED',
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
        <Preparing>마감된 경매가 없습니다. 🥲</Preparing>
      ) : (
        <>
          <Header type={'guest'} />
          <div className="flex text-5xl font-bold justify-center items-center"></div>
          <div>
            <div className="flex justify-evenly flex-wrap ml-24 mt-32 mb-10">
              {productRows.map((row, rowIndex) => (
                <div className="flex w-full z-1" key={rowIndex}>
                  {row.map((product, index) => (
                    <div
                      className={twMerge(
                        `w-full sm:w-1/2 md:w-1/4 mb-16 relative ${
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
                        price={'0'}
                        imagesSrc={product.imagesSrc}
                      />
                      <div className="flex justify-center items-center w-[240px] h-[240px] text-4xl text-center bg-Gray/70 text-Red absolute top-0 left-0">
                        <p className="px-3 bg-White/50 rounded-sm">SOLD OUT</p>
                      </div>
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
