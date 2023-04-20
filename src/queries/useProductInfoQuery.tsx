import { useQuery } from 'react-query';
import getProductInfo, {
  PostProductInfo,
} from '../api/ProductInfo/getProductInfo';

export function useProductInfoQuery(
  token: string,
  productInfo: PostProductInfo
) {
  return useQuery<PostProductInfo, Error>(['productInfo', productInfo], () =>
    getProductInfo(token, productInfo)
  );
}
