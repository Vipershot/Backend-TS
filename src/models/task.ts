import { Schema, Types, model, Model } from "mongoose";
import { Task } from "../interface/task.interface";

const TaskSchema = new Schema<Task>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    finish: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model("task", TaskSchema);
export default TaskModel;
