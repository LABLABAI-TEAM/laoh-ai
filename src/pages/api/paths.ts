import type { NextApiRequest, NextApiResponse } from "next";
import { type NextRequest } from "next/server";
export const config = { runtime: "edge" };
async function handlers(req: NextRequest) {
  return new Request(JSON.stringify({ name: "Henry" }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
async function handler3(req: NextRequest) {
  const authorization = req.cookies.get("authorization")?.value;
  return fetch("https://backend-api.com/api/protected", {
    method: req.method,
    redirect: "manual",
  });
}

async function handleFormInputAsync(obj: { name: string; message: string }) {
  console.log(obj);
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body;
  try {
    await handleFormInputAsync({ name, message });
    res.status(200).end();
  } catch (err) {}
  res.end("Hello World");
}
