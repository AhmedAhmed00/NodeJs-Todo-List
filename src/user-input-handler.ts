const readline = require("readline")


module.exports = class UserInputHandler{ 
     static rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
    static question(query: unknown): Promise<any> {
        return new Promise(resolve => this.rl.question(query, resolve));
    }

    static close() {
        this.rl.close();
    }
}


