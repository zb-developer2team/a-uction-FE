import { useQuery } from 'react-query';
import getFixInfo, { PostFixInfo } from '../api/ProductInfo/getFixInfo';

export function useFixInfoQuery(token: string, FixInfo: PostFixInfo) {
  return useQuery<PostFixInfo, Error>(['FixInfo', FixInfo], () =>
    getFixInfo(FixInfo)
  );
}
