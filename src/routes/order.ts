import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middleware/session";

const router = Router();

router.get('/', checkJWT ,getItems);

export { router };