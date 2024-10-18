import { ITodo } from "./todo";

const UserInputHandler = require("./user-input-handler");
const FileManager = require("./file-manager");
const Todo = require("./todo");

module.exports = class TodoList {
  todos: ITodo[] = [];

  constructor() {
    this.todos = FileManager.loadTodos();
  }

  private async confirmAction(message: string): Promise<boolean> {
    return await UserInputHandler.promptForConfirmation(message);
  }

  private saveTodosToFile(): void {
    FileManager.saveTodos(
      this.todos.map((todoItem: ITodo) => todoItem.getTodo())
    );
  }

  async getTodoDetailsFromUser(todo: ITodo): Promise<ITodo> {
    todo.title = await UserInputHandler.question("Task title: ");
    todo.dateStart = await UserInputHandler.question("Task starts at: ");
    todo.dateEnd = await UserInputHandler.question("Task ends at: ");
    await todo.chooseStatus();
    return todo;
  }

  async createTodo(): Promise<void> {
    const todo: ITodo = new Todo();
    todo.id =
      this.todos.length > 0
        ? Math.max(
            ...this.todos.map((todoItem: ITodo): number => todoItem.id)
          ) + 1
        : 1;
    const todoData: ITodo = await this.getTodoDetailsFromUser(todo);
    this.todos.push(todoData);
    this.saveTodosToFile();
  }

  async updateTodo(id: number): Promise<void> {
    const index = this.todos.findIndex(
      (todo: ITodo): boolean => todo.id === id
    );
    if (index !== -1) {
      this.todos[index] = await this.getTodoDetailsFromUser(this.todos[index]);
      this.saveTodosToFile();
    } else {
      console.log("Todo not found");
    }
  }

  async deleteTodo(id: number): Promise<void> {
    const index = this.todos.findIndex(
      (todo: ITodo): boolean => todo.id === id
    );
    if (index !== -1) {
      if (
        await this.confirmAction("Are you sure you want to delete this Item?")
      ) {
        this.todos.splice(index, 1);
        console.log(`Todo with ID ${id} has been deleted.`);
        this.saveTodosToFile();
      } else {
        console.log("Canceled");
      }
    } else {
      console.log("Todo not found");
    }
  }

  async removeAllTodos(): Promise<void> {
    if (
      await this.confirmAction("Are you sure you want to delete all items?")
    ) {
      this.todos.length = 0;
      this.saveTodosToFile();
    } else {
      console.log("Canceled");
    }
  }

  displayTodos(): void {
    this.todos.forEach((todoItem: ITodo, index: number) => {
      console.log(
        `======================================\n`,
        `Task ID : ${todoItem.id}\n`,
        `Task name : ${todoItem.title}\n5`,
        `Task starts at : ${todoItem.dateStart}\n`,
        `Task ends at : ${todoItem.dateEnd}\n`,
        `Task status : ${todoItem.status}\n`,
        `======================================\n`
      );
    });
  }
};
