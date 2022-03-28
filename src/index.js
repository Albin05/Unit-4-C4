const { application } = require("express");
const express = require("express");

const todoController = require("./controllers/todo.controllers");
const userController = require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("/register", userController);

app.use("/login", userController);

app.use("/todos", todoController);

app.use("/todo/:id", todoController);


module.exports = app;