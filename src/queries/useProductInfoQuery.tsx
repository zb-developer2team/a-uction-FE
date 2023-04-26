import { useQuery } from '@tanstack/react-query';
import getProductInfo, {
  PostProductInfo,
} from '../api/ProductInfo/getProductInfo';

export function useProductInfoQuery(
  token: string,
  productInfo: PostProductInfo,
  imageSrc: File
) {
  return useQuery<PostProductInfo, Error>(['productInfo', productInfo], () =>
    getProductInfo(token, productInfo, imageSrc)
  );
}
