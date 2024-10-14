"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = class Todo {
    constructor() {
        this._id = crypto.randomUUID();
        this._title = '';
        this._dateStart = Date.now();
        this._dateEnd = Date.now();
        this._status = "not-started";
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set dateStart(date) {
        this._dateStart = date;
    }
    get dateStart() {
        return this._dateStart;
    }
    set dateEnd(date) {
        this._dateEnd = date;
    }
    get dateEnd() {
        return this._dateEnd;
    }
    set status(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
};
