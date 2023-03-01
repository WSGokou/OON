import axios from "axios";

export const instance = axios.create({
  baseURL: `https://${process.env.VERCEL_URL}/api`,
});
