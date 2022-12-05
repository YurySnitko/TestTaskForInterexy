import { NextFunction, Request, Response } from "express";
import controller from "./controller";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await controller.signup(req.body);

    res.json({ token });
  } catch (error) {
    next(error)
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await controller.login(req.body.email, req.body.password);

    res.json({ token });
  } catch (error) {
    next(error)
  }
};

export const me = async (req: any, res: Response, next: NextFunction) => {
  try {
    const profile = await controller.read(req.user._id);

    res.json(profile);
  } catch (error) {
    next(error)
  }
};
