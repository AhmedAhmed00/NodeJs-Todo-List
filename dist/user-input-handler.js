"use strict";
var _a;
const readline = require("readline");
module.exports = (_a = class UserInputHandler {
        static question(query) {
            return new Promise((resolve) => this.rl.question(query, resolve));
        }
        static close() {
            this.rl.close();
        }
    },
    _a.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    }),
    _a);
