"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserInputHandler = require("./user-input-handler");
module.exports = (_a = class FileManager {
        static loadTodos() {
            try {
                const todosJson = fs.readFileSync(this._filePath, { encoding: "utf-8" });
                const todosParsed = JSON.parse(todosJson);
                return todosParsed;
            }
            catch (err) {
                console.log("error while loading todos");
                return [];
            }
        }
        static saveTodos(todos) {
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
