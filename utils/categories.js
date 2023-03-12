import {instance} from './axiosInstance';
const url = '/categories';

export const getOONCats = async () => {
  const res = await instance.get(url);

  const {data} = res;

  return data;
};
