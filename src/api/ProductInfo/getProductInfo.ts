import axios from 'axios';
import { token } from '../../main';

export interface PostProductInfo {
  auction: {
    itemName: string;
    itemStatus: string;
    startingPrice: number;
    minimumBid: number;
    category: string;
    startDateTime: string;
    endDateTime: string;
    description: string;
  };
  files: File[];
}

const getProductInfo = async (
  productInfo: PostProductInfo
): Promise<PostProductInfo> => {
  try {
    const formData = new FormData();
    const { auction, files } = productInfo;
    formData.append('auction', JSON.stringify(auction));
    files.forEach((file) => {
      formData.append('files', file);
    });

    formData.append('data', JSON.stringify(productInfo));
    const response = await axios({
      method: 'POST',
      url: `https://dev2team-server.site`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        credential: true,
        mode: 'same-origin',
        credentials: 'include',
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('실패');
  }
};

export default getProductInfo;
