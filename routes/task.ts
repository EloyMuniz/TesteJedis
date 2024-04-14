import TasksController from "../src/Controllers/TasksController";
import { Router } from "express";
import checkToken from "../src/service/token";
const tasksRouter = Router()

tasksRouter.post('/createtask', checkToken, TasksController.createTask)
tasksRouter.post('/taskvizualize', checkToken, TasksController.taskVizualize)
tasksRouter.post('/taskconcluded', checkToken, TasksController.taskConcluded)
tasksRouter.post('/taskexcluded', checkToken, TasksController.taskDeleted)
export default tasksRouter