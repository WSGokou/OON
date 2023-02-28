import { NextResponse } from "next/server";

const url = "https://oneoffnature.com/graphql/";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const method = "POST";

export async function GET() {
  const query = `
  query {
    products(
      filter: {}
      sort: {name: ASC}
      pageSize: 200
    ) {
      items {
        id
        name
        categories {
          name
        }
        sku
        created_at
        description {
          html
          }
        media_gallery {
          url
          label
         }
        price_range {
            minimum_price {
              regular_price {
                value
                
              }
            }
        }
      }
    }
  }`;
  const res = await fetch(url, {
    method,
    headers,
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());

  const data = res.data;

  return NextResponse.json(data);
}
