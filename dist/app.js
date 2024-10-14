"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require("readline");
const FileManager = require("./file-manager");
const TodoList = require("./todo-list");
const UserInputHandler = require("./user-input-handler");
const { Todo, ITodo } = require("./todo");
const t = new TodoList();
// t.createTodo()
t.displayTodos();
