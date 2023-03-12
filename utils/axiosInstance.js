import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
});
