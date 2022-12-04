import { Router } from "express";
import passport from "passport";
import { login, signup, me } from "./view";

export const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", passport.authenticate("jwt", { session: false }), me);
