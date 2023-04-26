import { useQuery } from 'react-query';
import getProductInfo, {
  PostProductInfo,
} from '../api/ProductInfo/getProductInfo';

export function useProductInfoQuery(
  token: string,
  productInfo: PostProductInfo,
  files: File
) {
  return useQuery<PostProductInfo, Error>(['productInfo', productInfo], () =>
    getProductInfo(token, productInfo, files)
  );
}
