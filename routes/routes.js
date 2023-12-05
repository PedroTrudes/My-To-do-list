const TaskController = require('../controller/TaskController');
const routes = require('express').Router();

routes.get("/home", TaskController.getAll)

module.exports = routes;