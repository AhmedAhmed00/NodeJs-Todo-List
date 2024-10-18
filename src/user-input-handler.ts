import { ITodo } from "./todo";

const readline = require("readline");

module.exports = class UserInputHandler {
  static rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  static question(query: unknown): Promise<any> {
    return new Promise((resolve): any => this.rl.question(query, resolve));
  }

  static close(): void {
    this.rl.close();
  }

  private static async promptForConfirmation(
    question: string
  ): Promise<boolean> {
    let chosen: string;
    while (true) {
      chosen = await UserInputHandler.question(
        `${question}?\n1 - YES\n2 - NO\n`
      );
      if (chosen === "1") return true;
      if (chosen === "2") return false;
      console.log("Invalid input, please choose 1 or 2.");
    }
  }
};
