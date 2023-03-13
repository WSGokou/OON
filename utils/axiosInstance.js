import axios from 'axios';

export const instance = axios.create({
  baseURL: `/api`,
});
// ${process.env.NEXT_PUBLIC_VERCEL_URL}
