import { ITodo } from "./todo";

const UserInputHandler = require("./user-input-handler");
const TodoList = require("./todo-list");

module.exports = class Display {
  static async start(todoList: any): Promise<void> {
    console.log("Welcome to Your To-Do List App");
    let chosen: string;

    do {
      this.displayMenu();
      chosen = await UserInputHandler.question("Choose an operation: ");
      await this.chooseOperation(chosen, todoList);
    } while (chosen !== "6");

    console.log("Goodbye!");
    UserInputHandler.close();
  }
  private static async chooseOperation(
    chosen: string,
    todoList: any
  ): Promise<void> {
    switch (chosen) {
      case "1":
        await todoList.createTodo();
        break;

      case "2":
        const toUpdate = await UserInputHandler.question(
          "Choose the ID of the todo to update: "
        );
        await todoList.updateTodo(Number(toUpdate));
        break;

      case "3":
        const toDelete = await UserInputHandler.question(
          "Enter the ID of the Todo to delete: "
        );
        await todoList.deleteTodo(Number(toDelete));

        break;
      case "4":
        await todoList.removeAllTodos();

        break;

      case "5":
        await todoList.displayTodos();
        break;

      case "6":
        console.log("Closing the program...");
        break;

      default:
        console.log("Invalid option, please choose a valid operation.");
    }
  }

  private static displayMenu(): void {
    console.log("\n1 - Create New Todo");
    console.log("2 - Update Existing Todo");
    console.log("3 - Delete Existing Todo");
    console.log("4 - Remove All Todos");
    console.log("5 - Display All Todos");
    console.log("6 - Close The Program\n");
  }
};
