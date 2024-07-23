import { Router } from "express";
import { checkJWT } from "../middleware/session";


const router = Router();

router.post("/", checkJWT)

export { router };