import { twMerge } from 'tailwind-merge';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Dropdown/Dropdown';
import Product from '../../components/Product/Product';

export interface SearchPageProps {
  count?: string;
  className?: string;
}

const products = [
  { category: '미술품', startPrice: '50,000', price: '60,000' },
  { category: '가구', startPrice: '100,000', price: '120,000' },
  { category: '디지털', startPrice: '200,000', price: '250,000' },
  { category: '의류', startPrice: '30,000', price: '35,000' },
];

export default function SearchPage({ count, className }: SearchPageProps) {
  return (
    <div>
      <Header type={'guest'} />
      <div className="text-3xl font-bold mt-[100px] ml-[50px]">
        총 {count}건이 검색되었습니다.
      </div>
      <div className="flex justify-end mr-[50px]">
        <Dropdown type={'sort'} />
      </div>

      <div className="flex justify-around mt-10 mb-10">
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
