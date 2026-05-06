"use strict";

import app from "./app";
import config from "config";
import logger from "./config/logger";
import connectDB from "./config/db";

const startServer = async () => {
  const PORT: string = config.get("server.port");
  try {
    await connectDB();
    app.listen(PORT, () => {
      logger.error("error");
      logger.warn("hello");
      logger.info("Listing on port", { port: PORT });
    });
  } catch (error) {
    process.exit(1);
  }
};

startServer();
