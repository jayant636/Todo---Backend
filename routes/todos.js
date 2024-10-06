const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodobyId } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updatetodo");
const { deleteTodo } = require("../controllers/deletetodo");

// define the API routes & mapped it
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodos/:id", getTodobyId);
router.put("/updateTodos/:id", updateTodo);
router.put("/deleteTodos/:id", deleteTodo);

module.exports = router;
