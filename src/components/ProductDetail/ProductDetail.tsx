import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';
import Title from '../Title/Title';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import ProductTime from '../ProductTime/ProductTime';
import ProductPrice from '../ProductPrice/ProductPrice';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export interface ProductDetailProps {
  children?: string;
  className?: string;
  auctionId?: string;
}

export interface ProductData {
  itemStatus: string;
  auctionId: string | number;
  itemName: string;
  category: string;
  startingPrice: string;
  price: string;
  imagesSrc: string[];
  startDateTime: string;
  endDateTime: string;
  description: string;
}

export default function ProductDetail({
  children,
  className,
  ...props
}: ProductDetailProps) {
  const [list, setList] = useState<ProductData[]>([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const result = await axios
          .all([
            axios.get(
              `https://dev2team-server.site/auctions/listAll?status=SCHEDULED`
            ),
            axios.get(
              `https://dev2team-server.site/auctions/listAll?status=PROCEEDING`
            ),
            axios.get(
              `https://dev2team-server.site/auctions/listAll?status=COMPLETED`
            ),
          ])
          .then(
            axios.spread((res1, res2, res3) => {
              const response1 = res1.data.content;
              const response2 = res2.data.content;
              const response3 = res3.data.content;
              const response = [...response1, ...response2, ...response3];
              setList(response);
            })
          );
      } catch (err) {
        console.error(err);
        console.log('실패');
      }
    };
    getList();
  }, []);

  const item = list.find((items) => items?.auctionId === +props?.auctionId);

  console.log(new Date(item?.startDateTime));

  const startYear = new Date(item?.startDateTime).getFullYear();
  const startMonth = new Date(item?.startDateTime).getMonth() + 1;
  const startDate = new Date(item?.startDateTime).getDate();
  const startHour = new Date(item?.startDateTime).getHours();
  const startMinute = new Date(item?.startDateTime).getMinutes();

  const startTime =
    startYear +
    '.' +
    startMonth +
    '.' +
    startDate +
    ' ' +
    startHour +
    ':' +
    startMinute;

  const endYear = new Date(item?.endDateTime).getFullYear();
  const endMonth = new Date(item?.endDateTime).getMonth() + 1;
  const endDate = new Date(item?.endDateTime).getDate();
  const endHour = new Date(item?.endDateTime).getHours();
  const endMinute = new Date(item?.endDateTime).getMinutes();

  const endTime =
    endYear + '.' + endMonth + '.' + endDate + ' ' + endHour + ':' + endMinute;

  return (
    <>
      <div
        className={twMerge(
          `flex justify-center mt-24 font-line-seed-sans-kr`,
          className
        )}
      >
        <div>
          <Image
            size={'lg'}
            src={item?.imagesSrc}
            alt={'상품 이미지 입니다.'}
          />
        </div>
        <div className={twMerge(`w-[420px] ml-10`)}>
          <h2 className={twMerge(`border-b-[1px] pb-5`)}>
            <Title>{item?.itemName}</Title>
          </h2>
          <div>
            <CategoryDetail
              category={item?.category}
              status={item?.itemStatus}
              description={item?.description}
            />
          </div>
          <div>
            <ProductTime
              remainTime={'2일 5시간 22분'}
              auctionPeriod={startTime + ' ' + '~' + ' ' + endTime}
            />
          </div>
          <div>
            <ProductPrice
              price={'100'}
              startPrice={item?.startingPrice}
              type={'member'}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
