import dotenv from "dotenv";

dotenv.config();

import app from "./app";
import { enviroment } from "./config";

const PORT = enviroment.port;

app.listen(PORT, () => {
  console.log(`🚀  Server listening on http://localhost:${PORT}`);
  console.log(`    Environment: ${enviroment.nodeEnv}`);
  console.log(`    Press Ctrl+C to stop the server\n`);
});
