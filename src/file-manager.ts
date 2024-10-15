import { ITodo } from "./todo";

const fs = require("fs");
const UserInputHandler = require("./user-input-handler");
const Todo = require("./todo");

module.exports = class FileManager {
  private static _filePath = "todos.json";
  static isExistingFile(filePath: string): boolean {
    return fs.existsSync(filePath);
  }

  static loadTodos(): ITodo[] {
    if (this.isExistingFile(this._filePath)) {
      try {
        const todosParsed = JSON.parse(
          fs.readFileSync(this._filePath, { encoding: "utf-8" })
        );
        return todosParsed.map((todoData: any) => {
          const { status, dateStart, _id: id, dateEnd, title } = todoData;
          const todo: ITodo = new Todo(title, dateStart, dateEnd, status, id);
          return todo;
        });
      } catch (err) {
        console.log("Error loading todos:", err);
        return [];
      }
    } else {
      console.log("Error loading todos:");
      return [];
    }
  }

  static saveTodos(todos: ITodo[]) {
    try {
      fs.writeFileSync(this._filePath, JSON.stringify(todos));
      console.log("\nJSON file updated successfully!");
    } catch (err) {
      console.error("\nAn error occurred while writing to the file:", err);
    }
  }
};
