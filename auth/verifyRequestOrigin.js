import { NextRequest } from "next/server";

async function verifyRequestOrigin(req) {
  const allowedOrigins = [
    "https://mmchokers.vercel.app",
    "http://localhost:3000",
  ];

  const requestHost = req.headers.host;
  const requestProtocol = req.headers["x-forwarded-proto"] || "http";
  const requestOrigin = `${requestProtocol}://${requestHost}`;

  if (!allowedOrigins.includes(requestOrigin)) {
    return {
      message: "Acceso no autorizado",
      status: 403,
    };
  }

  return {
    message: "Acceso autorizado",
    status: 200,
  };
}

export default verifyRequestOrigin;
