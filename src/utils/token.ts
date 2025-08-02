// utils/token.ts
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

export const verify = (token: string): { data: { userId: number } } => {
  return jwt.verify(token, SECRET) as { data: { userId: number } };
};

export const verifyd = (
  token: string
): { data: { userId: number; email?: string } } => {
  return jwt.verify(token, JWT_SECRET) as {
    data: { userId: number; email?: string };
  };
};
