import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { RequestExt } from "../interfaces/req-ext"

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Only seen by athenticated / JWT",
            user: req.user,
        })
    } catch (e) {
        handleHttp(res, "Error getting items");
    }
}

export { getItems };