const UserInputHandler = require("./user-input-handler");
const TodoList = require("./todo-list");

module.exports = class Display {




  static async start(): Promise<void> {
    console.log("Welcome to Your To-Do List App");
    let chosen: string;

    do {
      console.log("\n1 - Create New Todo");
      console.log("2 - Update Existing Todo");
      console.log("3 - Delete Existing Todo");
      console.log("4 - Remove All Todos");
      console.log("5 - Display All Todos");
      console.log("6 - Close The Program\n");
      chosen = await UserInputHandler.question("Choose an operation: ");
      await this.chooseOperation(chosen);
    } while (chosen !== "6");

    console.log("Goodbye!");
    UserInputHandler.close();
  }

  static async chooseOperation(chosen: string): Promise<void> {
    const todoList = new TodoList();

    switch (chosen) {
      case "1":
        await todoList.createTodo();
        break;

      case "2":
        const toUpdate = await UserInputHandler.question("Choose the ID of the todo to update: ");
        await todoList.updateTodo(Number(toUpdate));
        break;

      case "3":
        const toDelete = await UserInputHandler.question("Choose the ID of the todo to delete: ");
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
};
