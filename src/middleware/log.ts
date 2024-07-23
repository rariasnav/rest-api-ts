import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("I'm the log");
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log(userAgent);
    
    next();
};

export { logMiddleware };