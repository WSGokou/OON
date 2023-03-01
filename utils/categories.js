const host = process.env.HOST;
const url = `${host}/api/categories`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getOONCats = async () => {
  const res = await fetch(url, {
    method: "GET",
    headers,
  }).then((res) => res.json());

  console.log("utilcats", res);

  return res;
};
