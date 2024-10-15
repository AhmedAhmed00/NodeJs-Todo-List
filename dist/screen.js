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
const UserInputHandler = require("./user-input-handler");
const TodoList = require("./todo-list");
module.exports = class Display {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Welcome to Your To-Do List App");
            let chosen;
            do {
                console.log("\n1 - Create New Todo");
                console.log("2 - Update Existing Todo");
                console.log("3 - Delete Existing Todo");
                console.log("4 - Remove All Todos");
                console.log("5 - Display All Todos");
                console.log("6 - Close The Program\n");
                chosen = yield UserInputHandler.question("Choose an operation: ");
                yield this.chooseOperation(chosen);
            } while (chosen !== "6");
            console.log("Goodbye!");
            UserInputHandler.close();
        });
    }
    static chooseOperation(chosen) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoList = new TodoList();
            switch (chosen) {
                case "1":
                    yield todoList.createTodo();
                    break;
                case "2":
                    const toUpdate = yield UserInputHandler.question("Choose the ID of the todo to update: ");
                    yield todoList.updateTodo(Number(toUpdate));
                    break;
                case "3":
                    const toDelete = yield UserInputHandler.question("Choose the ID of the todo to delete: ");
                    yield todoList.deleteTodo(Number(toDelete));
                    break;
                case "4":
                    yield todoList.removeAllTodos();
                    break;
                case "5":
                    yield todoList.displayTodos();
                    break;
                case "6":
                    console.log("Closing the program...");
                    break;
                default:
                    console.log("Invalid option, please choose a valid operation.");
            }
        });
    }
};
