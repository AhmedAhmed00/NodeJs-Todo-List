"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserInputHandler = require("./user-input-handler");
const FileManager = require("./file-manager");
const Todo = require("./todo");
module.exports = class TodoList {
    constructor() {
        this.todos = FileManager.loadTodos();
    }
    createTodo() {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = new Todo();
            todo.title = yield UserInputHandler.question("Task title : ");
            todo.dateStart = yield UserInputHandler.question("Task starts at : ");
            todo.dateEnd = yield UserInputHandler.question("Task ends at : ");
            todo.status = yield UserInputHandler.question("Task status : ");
            this.todos.push(todo);
            FileManager.saveTodos(this.todos);
            UserInputHandler.close();
        });
    }
    removeTodo(title) {
        this.todos = this.todos.filter(todo => todo.title !== title);
        FileManager.saveTodos(this.todos);
    }
    removeAllTodos() {
        this.todos = [];
        FileManager.saveTodos([]);
    }
};
