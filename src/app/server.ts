import app from "./app";
import config from "./config/config";

app.listen(config.port, () => {
  console.log("Log: Server is listening on port ", config.port);
});
