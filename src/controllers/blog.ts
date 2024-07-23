import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getblog = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, "Error getting blog");
    }
}

const getblogs = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, "Error getting blogs");
    }
}

const updateblog = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, "Error updating blog");
    }
}

const postblog = ({ body }: Request, res: Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res, "Error creating blog");
    }
}

const deleteblog = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res, "Error deleting blog");
    }
}

export { getblog, getblogs, updateblog, postblog, deleteblog };