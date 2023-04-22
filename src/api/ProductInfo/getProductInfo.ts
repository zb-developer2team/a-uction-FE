import axios from 'axios';

export interface PostProductInfo {
  itemName: string;
  itemStatus: string;
  startingPrice: number;
  minimumBid: number;
  category: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
}
const getProductInfo = async (
  token: string,
  productInfo: PostProductInfo
): Promise<PostProductInfo> => {
  return await axios({
    method: 'post',
    url: `http://localhost:8000/api/auctions`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { productInfo },
  });
};

export default getProductInfo;
