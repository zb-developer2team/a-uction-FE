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
  try {
    const response = await axios({
      method: 'post',
      url: `http://localhost:8000/api/auctions`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { productInfo },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('실패');
  }
};
export default getProductInfo;
