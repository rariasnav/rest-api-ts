import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const checkJWT = (req: RequestExt, res: Response, next:NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`);
        
        if (!isUser) {
            res.status(401);
            res.send("Invalid session");
        } else {
            req.user = isUser;
            next(); 
        }               
    } catch (e) {
        console.log({ e });        
        res.status(400);
        res.send("Invalid session");
    }
};

export { checkJWT };