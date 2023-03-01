import axios from "axios";

export const instance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
});
