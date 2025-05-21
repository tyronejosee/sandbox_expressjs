import dotenv from "dotenv";

dotenv.config();

export const enviroment = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 27017,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "sandbox_expressjs",
  },
  jwtSecret: process.env.JWT_SECRET || "secret",
};
