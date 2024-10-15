"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserInputHandler = require("./user-input-handler");
const Todo = require("./todo");
module.exports = (_a = class FileManager {
        static isExistingFile(filePath) {
            return fs.existsSync(filePath);
        }
        static loadTodos() {
            if (this.isExistingFile(this._filePath)) {
                try {
                    const todosParsed = JSON.parse(fs.readFileSync(this._filePath, { encoding: "utf-8" }));
                    return todosParsed.map((todoData) => {
                        const { status, dateStart, _id: id, dateEnd, title } = todoData;
                        const todo = new Todo(title, dateStart, dateEnd, status, id);
                        return todo;
                    });
                }
                catch (err) {
                    console.log("Error loading todos:", err);
                    return [];
                }
            }
            else {
                console.log("Error loading todos:");
                return [];
            }
        }
        static saveTodos(todos) {
            try {
                fs.writeFileSync(this._filePath, JSON.stringify(todos));
                console.log("\nJSON file updated successfully!");
            }
            catch (err) {
                console.error("\nAn error occurred while writing to the file:", err);
            }
        }
    },
    _a._filePath = "todos.json",
    _a);
