import { twMerge } from 'tailwind-merge';
import Product from '../../components/Product/Product';
import React from 'react';
import { useEffect, useState } from 'react';

export interface SearchPageProps {
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
    itemName: '아이폰 iphone1',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: '아이폰 iphone1',
    category: 'ETC',
    startPrice: '5000',
    price: '120,000',
  },
  {
    itemName: '아이폰 iphone1',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: '아이폰 iphone1',
    category: 'ETC',
    startPrice: '5000',
    price: '120,000',
  },
  {
    itemName: '아이폰 iphone1',
    category: 'ETC',
    startPrice: '5000',
    price: '5,000',
  },
  {
    itemName: '아이폰 iphone1',
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

export default function SearchPage({ className }: Partial<SearchPageProps>) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get('/auctions/my-auctions');
      // setProducts(response.data);

      setProducts(dummyProducts);
      setCount(dummyProducts.length);
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
                    startPrice={product.startPrice}
                    price={product.price}
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
