import dotenv from "dotenv";

// importing path
dotenv.config({ path: "../../.env" });

export default {
  port: process.env.PORT || 5000,
  databaseURL: process.env.DATABASE_URL,
};
