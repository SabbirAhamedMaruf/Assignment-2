import dotenv from "dotenv";
import path from "path";

// importing path
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 5000,
  databaseURL: process.env.DATABASE_URL,
};
