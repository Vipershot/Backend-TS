import { Request, Response } from "express";
import { handleHttp } from "../utils/handleError";
import {
  insertTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../service/task";

const getItems = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getTask(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_TASK");
  }
};
const getItem = async (req: Request, res: Response) => {
  try {
    const response = await getTasks();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_TASKS");
  }
};
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateTask(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_TASK");
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteTask(id);
    res.send(response);
  } catch (error) {}
  handleHttp(res, "ERROR_DELETE_TASK");
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseTask = await insertTask(body);
    res.send(responseTask);
  } catch (error) {
    handleHttp(res, "ERROR_POST_TASK");
  }
};

export { getItem, getItems, updateItem, deleteItem, postItem };
