import { config } from "dotenv";
config();

const { PORT, NODE_ENV, JWKS_URI, MONGODB_URI } = process.env;

export const Config = {
  PORT,
  NODE_ENV,
  JWKS_URI,
  MONGODB_URI,
};
