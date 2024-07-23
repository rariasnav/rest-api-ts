import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { 
    insertCar, 
    getCars, 
    getCar,
    updateCar,
    deleteCar,
} from "../services/items";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        const data = response ? response : "Not found";
        res.send(data);
    } catch (e) {
        handleHttp(res, "Error getting item");
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handleHttp(res, "Error getting items");
    }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "Error updating item");
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "Error creating item", e);
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await deleteCar(id);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, "Error deleting item");
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };