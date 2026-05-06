import express, { Request, Response } from "express";
import { asyncWrapper } from "../utils/AsyncWrapper ";
import { CustomerController } from "./customerController";
import authenticate from "../common/middleware/authenticate";
import { AuthRequest } from "../types";

const router = express.Router();

const customerController = new CustomerController();

router.get(
  "/",
  authenticate,
  asyncWrapper((req: Request, res: Response) =>
    customerController.getCustomer(req as AuthRequest, res),
  ),
);

export default router;
