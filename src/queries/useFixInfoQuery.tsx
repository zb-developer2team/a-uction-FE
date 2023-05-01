import { useQuery } from '@tanstack/react-query';
import getFixInfo, { PostFixInfo } from '../api/ProductInfo/getFixInfo';

export function useFixInfoQuery(FixInfo: PostFixInfo) {
  return useQuery<PostFixInfo, Error>(['FixInfo', FixInfo], () =>
    getFixInfo(FixInfo)
  );
}
