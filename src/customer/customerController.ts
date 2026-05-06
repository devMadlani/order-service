import { Response } from "express";

import customerModel from "./customerModel";
import { AuthRequest } from "../types";

export class CustomerController {
  getCustomer = async (req: AuthRequest, res: Response) => {
    const { sub: userId, firstName, lastName, email } = req.auth;
    const customer = await customerModel.findOne({ userId });
    if (!customer) {
      const newCustomer = await customerModel.create({
        userId,
        firstName,
        lastName,
        email,
        addresses: [],
      });
      return res.json(newCustomer);
    }
    res.json(customer);
  };
}
