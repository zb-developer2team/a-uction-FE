import { useQuery } from '@tanstack/react-query';
import getProductInfo, {
  PostProductInfo,
} from '../api/ProductInfo/getProductInfo';
import { token } from '../main';

export function useProductInfoQuery(productInfo: PostProductInfo, files: File) {
  return useQuery<PostProductInfo, Error>(['productInfo', productInfo], () =>
    getProductInfo(productInfo, files)
  );
}
