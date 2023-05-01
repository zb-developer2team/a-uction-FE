import axios from 'axios';
import { twMerge } from 'tailwind-merge';
import Product from '../../components/Product/Product';
import React from 'react';
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://dev2team-server.site/auctions/my-auctions',
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
    <div>
      <div className="relative">
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
    </div>
  );
}
