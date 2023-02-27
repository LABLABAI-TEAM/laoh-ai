import type { NextApiRequest, NextApiResponse } from "next";

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
  });
  const params = req.query.params;

  res.end(
    JSON.stringify({
      message: "Hello World!",
      params,
    })
  );
}
