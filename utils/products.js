import {instance} from './axiosInstance';
const url = '/products';

export const getProducts = async () => {
  const res = await instance.get(url);

  const {data} = res;

  return data;
};
