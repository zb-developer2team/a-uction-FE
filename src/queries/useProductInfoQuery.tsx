import { useQuery } from '@tanstack/react-query';
import getProductInfo, {
  PostProductInfo,
} from '../api/ProductInfo/getProductInfo';

export function useProductInfoQuery(
  productInfo: PostProductInfo,
) {
  return useQuery<PostProductInfo, Error>(['productInfo', productInfo], () =>
    getProductInfo(productInfo)
  );
}