import {NextResponse} from 'next/server';

const url = process.env.OON_URL + '/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const method = 'POST';

export async function GET() {
  const query = `
  query {
    categoryList(filters: {ids: {in: ["2"]}}) {
     id
     name
     level
     url_path
     children_count
     children {
       id
       level
       name
       path
       url_path
       url_key
       children_count
       children {
         id
         level
         name
         path
         url_path
         url_key
         children_count
         children {
           id
           level
           name
           path
           url_path
           url_key
           children_count
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

  return NextResponse.json({data});
}
