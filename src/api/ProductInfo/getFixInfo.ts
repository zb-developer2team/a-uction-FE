import axios from 'axios';
import { token } from '../../main';

export interface PostFixInfo {
  itemName: string;
  itemStatus: string;
  startingPrice: number;
  minimumBid: number;
  category: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
  //auctionStatus 추가 여부 문의
}

const getFixInfo = async (FixInfo: PostFixInfo): Promise<PostFixInfo> => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://dev2team-server.site/auctions/update?auctionId`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: FixInfo,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('실패');
  }
};

export default getFixInfo;
