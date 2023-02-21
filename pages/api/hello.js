// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from "axios";

const baseURL = "http://localhost/graphql";
const headers = { "Content-Type": "application/json" };

export const axios = Axios.create({
  baseURL,
  headers,
});

export function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
