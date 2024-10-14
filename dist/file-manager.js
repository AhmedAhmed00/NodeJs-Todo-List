"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserInputHandler = require("./user-input-handler");
const Todo = require("./todo");
module.exports = (_a = class FileManager {
        static isExistingFile(filePath) {
            if (fs.existsSync(filePath)) {
                return true;
            }
            else {
                return false;
            }
        }
        static loadTodos() {
            if (this.isExistingFile(this._filePath)) {
                try {
                    const todosJson = fs.readFileSync(this._filePath, { encoding: "utf-8" });
                    const todosParsed = JSON.parse(todosJson);
                    const todos = todosParsed.map((todo) => {
                        return Object.assign(new Todo(), todo);
                    });
                    return todos;
                }
                catch (err) {
                    return [];
                }
            }
            else {
                return [];
            }
        }
        static saveTodos(todos) {
            console.log(todos);
            fs.writeFile(this._filePath, JSON.stringify(todos), (err) => {
                if (err) {
                    console.error('An error occurred while writing to the file:', err);
                }
                else {
                    console.log('File updated successfully!');
                    UserInputHandler.close();
                }
            });
        }
    },
    _a._filePath = "todos.json",
    _a);
