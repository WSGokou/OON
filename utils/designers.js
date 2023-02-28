const localUrl = "http://localhost/graphql/";
const url = "https://oneoffnature.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const method = "POST";

export const getDesigners = async () => {
  const query = `query {}`;
  const res = await fetch(url, {
    method,
    headers,
    body: JSON.stringify({
      query,
    }),
  });

  const data = await res.json();

  return data;
};
