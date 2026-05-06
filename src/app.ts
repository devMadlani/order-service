import express from "express";

import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./common/middleware/globalErrorHandler";
import customerRouter from "./customer/customerRouter";

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/customer", customerRouter);

app.use(globalErrorHandler);

export default app;
