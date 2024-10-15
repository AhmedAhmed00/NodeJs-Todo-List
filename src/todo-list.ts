import { ITodo } from "./todo";

const UserInputHandler = require("./user-input-handler");
const FileManager = require("./file-manager");
const Todo = require("./todo");

module.exports = class TodoList {
  todos: ITodo[];
  constructor() {
    this.todos = FileManager.loadTodos();
  }
  async getTodoDateFromUser(todo: ITodo): Promise<ITodo> {
    todo.title = await UserInputHandler.question("Task title : ");
    todo.dateStart = await UserInputHandler.question("Task starts at : ");
    todo.dateEnd = await UserInputHandler.question("Task ends at : ");
    todo.status = await UserInputHandler.question("Task status : ");
    return todo;
  }

  async createTodo(): Promise<void> {
    const todo: ITodo = new Todo();
    const todoData: ITodo = await this.getTodoDateFromUser(todo);
    todoData.id = this.todos.length;
    this.todos.push(todoData);
    FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
  }

  async updateTodo(id: number): Promise<void> {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const updatedData = await this.getTodoDateFromUser(this.todos[index]);
      this.todos[index] = updatedData;
      FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
    } else {
      console.log("Todo not found");
    }
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      this.todos.splice(index, 1);

      FileManager.saveTodos(this.todos.map((t) => t.getTodo()));
    } else {
      console.log("not Found");
    }
  }

  displayTodos(): void {
    this.todos.forEach((todo) => {
      console.log(todo.getTodo());
    });
  }

  removeAllTodos(): void {
    this.todos.length = 0;
    FileManager.saveTodos([]);
  }
};
