import TaskModel from "../models/task";
import { Task } from "../interface/task.interface";

const insertTask = async (item: Task) => {
  const responseInsert = await TaskModel.create(item);
  return responseInsert;
};

const getTasks = async () => {
  const responseTask = await TaskModel.find({});
  return responseTask;
};

const getTask = async (id: string) => {
  const responseTask = await TaskModel.findOne({ _id: id });
  return responseTask;
};

const updateTask = async (id: string, data: Task) => {
  const responseTask = await TaskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseTask;
};

const deleteTask = async (id: string) => {
  const responseTask = await TaskModel.findByIdAndDelete({ _id: id });
  return responseTask;
};

export { insertTask, getTasks, getTask, updateTask, deleteTask };
