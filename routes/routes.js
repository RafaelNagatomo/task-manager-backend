const express = require("express");

const TaskController = require("../controller/TaskController");

const routes = express.Router();

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id", TaskController.getById);
routes.post("/update/:id", TaskController.updateTask);
routes.get("/delete/:id", TaskController.deleteTask);

module.exports = routes;
