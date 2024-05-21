import mongoose from "mongoose";
import app from "./app";
import config from "./app/config/config";

// Connecting with mongodb
async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);
    console.log("Log: Database connected successfully!");
    app.listen(config.port, () => {
      console.log("Log: Server is listening on port ", config.port);
    });
  } catch (error) {
    console.log("There is an error while connecting with the server!");
  }
}

main();
