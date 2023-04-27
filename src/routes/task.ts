import { Router, Request, Response } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/task";
import { logMiddleware } from "../middleware/log";

const router = Router();
/**
 * localhost:3002/items [GET]
 */
router.get("/", getItem);
router.get("/:id", getItems);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
