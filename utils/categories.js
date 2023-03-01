const host = process.env.HOST;
const url = `${host}/api/categories`;

export const getOONCats = async () => {
  const res = await fetch(url, {
    method: "GET",
  }).then((res) => res.json());

  console.log("utilcats", res);

  return res;
};
