import app from "./src/app";
import { envConfig } from "./src/config/config";
import connectTODB from "./src/config/db";

async function startServer() {
  await connectTODB();

  const port = envConfig.port || 4000;

  app.listen(port, () => {
    console.log(`Server has started at port ${port}`);
  });
}
startServer();
