import express from "express";

import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(globalErrorHandler);

export default app;
