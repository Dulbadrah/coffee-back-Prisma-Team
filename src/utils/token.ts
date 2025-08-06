// utils/token.ts

// token.ts
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "your_jwt_secret";

interface JwtPayload {
  userId: number;
  email?: string;
}

export const verify = (token: string): JwtPayload => {
  return jwt.verify(token, SECRET) as JwtPayload;
};

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

interface JwtPayload {
  userId: number;
  email?: string;
}

export const verifyd = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};

const secret = "super-secret-123";
type Payload = {
  userId: number;
  email: string;
};

export const createAccessToken = (payload: Payload) => {
  const hour = Math.floor(Date.now() / 1000) + 60 * 60;

  const accessToken = jwt.sign({ exp: hour, payload }, secret);
  return accessToken;
};
