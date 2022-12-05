import { Request, Response } from "express";
import controller from "./controller";

export const signup = async (req: Request, res: Response) => {
  const token = await controller.signup(req.body);

  res.json({ token });
};

export const login = async (req: Request, res: Response) => {
  const token = await controller.login(req.body.email, req.body.password);

  res.json({ token });
};

export const me = async (req: any, res: Response) => {
  const profile = await controller.read(req.user._id);

  res.json({ profile });
};
