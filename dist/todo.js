"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Todo_dateStart, _Todo_dateEnd, _Todo_title, _Todo_status, _a;
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (_a = class Todo {
        constructor() {
            _Todo_dateStart.set(this, void 0);
            _Todo_dateEnd.set(this, void 0);
            _Todo_title.set(this, void 0);
            _Todo_status.set(this, void 0);
            this._id = crypto.randomUUID();
            __classPrivateFieldSet(this, _Todo_title, '', "f");
            __classPrivateFieldSet(this, _Todo_dateStart, Date.now(), "f");
            __classPrivateFieldSet(this, _Todo_dateEnd, Date.now(), "f");
            __classPrivateFieldSet(this, _Todo_status, "not-started", "f");
            console.log(this.title);
        }
        set title(title) {
            __classPrivateFieldSet(this, _Todo_title, title, "f");
        }
        get title() {
            return __classPrivateFieldGet(this, _Todo_title, "f");
        }
        set dateStart(date) {
            __classPrivateFieldSet(this, _Todo_dateStart, date, "f");
        }
        get dateStart() {
            return __classPrivateFieldGet(this, _Todo_dateStart, "f");
        }
        set dateEnd(date) {
            __classPrivateFieldSet(this, _Todo_dateEnd, date, "f");
        }
        get dateEnd() {
            return __classPrivateFieldGet(this, _Todo_dateEnd, "f");
        }
        set status(status) {
            __classPrivateFieldSet(this, _Todo_status, status, "f");
        }
        get status() {
            return __classPrivateFieldGet(this, _Todo_status, "f");
        }
        getTodo() {
            return {
                _id: this._id,
                title: __classPrivateFieldGet(this, _Todo_title, "f"),
                dateStart: __classPrivateFieldGet(this, _Todo_dateStart, "f"),
                dateEnd: __classPrivateFieldGet(this, _Todo_dateEnd, "f"),
                status: __classPrivateFieldGet(this, _Todo_status, "f"),
            };
        }
    },
    _Todo_dateStart = new WeakMap(),
    _Todo_dateEnd = new WeakMap(),
    _Todo_title = new WeakMap(),
    _Todo_status = new WeakMap(),
    _a);
