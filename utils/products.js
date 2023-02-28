const localUrl = "http://localhost/graphql/";
const host = process.env.HOST;
const url = `${host}/api/products`;

export const getProducts = async () => {
  const res = await fetch(url, {
    method: "GET",
  }).then((res) => res.json());

  return res;
};
