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
    getTodoDateFromUser(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            todo.title = yield UserInputHandler.question("Task title : ");
            todo.dateStart = yield UserInputHandler.question("Task starts at : ");
            todo.dateEnd = yield UserInputHandler.question("Task ends at : ");
            todo.status = yield UserInputHandler.question("Task status : ");
            return todo;
        });
    }
    createTodo() {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = new Todo();
            const todoData = yield this.getTodoDateFromUser(todo);
            todoData.id = this.todos.length;
            this.todos.push(todoData);
            FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
        });
    }
    updateTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.todos.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                const updatedData = yield this.getTodoDateFromUser(this.todos[index]);
                this.todos[index] = updatedData;
                FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
            }
            else {
                console.log("Todo not found");
            }
        });
    }
    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
        }
        else {
            console.log("not Found");
        }
    }
    displayTodos() {
        this.todos.forEach((todo) => {
            console.log(todo.getTodo());
        });
    }
    removeAllTodos() {
        this.todos.length = 0;
        FileManager.saveTodos([]);
    }
};
