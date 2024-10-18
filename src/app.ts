const TodoList = require("./todo-list");

const Display = require("./screen");

const todoList = new TodoList();

Display.start(todoList);
