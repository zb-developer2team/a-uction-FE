import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Banner from '../../assets/Banner.png';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { token } from '../../main';
import { Link } from 'react-router-dom';

export interface MainPageProps {
  children?: string;
  className?: string;
}

export interface ProductData {
  auctionId: string | number;
  itemName: string;
  category: string;
  startingPrice: string;
  price: string;
  imagesSrc: [];
}

export default function MainPage({ children, className }: MainPageProps) {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://dev2team-server.site/auctions/listAll?status=PROCEEDING',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data.content);
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
      <div>
        <div className="flex justify-evenly flex-wrap ml-24 mt-20 mb-10">
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
                      price={product.price}
                      imagesSrc={product.imagesSrc}
                    />
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
