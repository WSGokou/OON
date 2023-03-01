const host = process.env.HOST;
const url = `${host}/api/products`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getProducts = async () => {
  const res = await fetch(url, {
    method: "GET",
    headers,
  }).then((res) => res.json());

  console.log("utilprods", res);

  return res;
};
