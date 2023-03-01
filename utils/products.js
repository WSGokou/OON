import { instance } from "./axiosInstance";
const url = "/products";

export const getProducts = async () => {
  // const res = await fetch(url, {
  //   method: "GET",
  // }).then((res) => res.json());

  const res = await instance.get(url);

  const { data } = res;
  console.log("utilprods", data);

  return data;
};
