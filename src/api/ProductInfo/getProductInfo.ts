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
  imageSrc: File;
}

const getProductInfo = async (
  token: string,
  productInfo: PostProductInfo,
  files: File
): Promise<PostProductInfo> => {
  try {
    const formData = new FormData();

    formData.append('file', files);
    formData.append('productInfo', JSON.stringify(productInfo));

    formData.append('data', JSON.stringify(productInfo));
    const response = await axios({
      method: 'post',
      url: `http://3.35.38.11:8081/auctions`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
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
