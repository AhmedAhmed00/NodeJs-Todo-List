const UserInputHandler = require("./user-input-handler");

type statusType = "not-started" | "in-progress" | "completed";

export interface ITodo {
  id: number;
  title: string;
  dateStart: number;
  dateEnd?: number;
  status: statusType;
  getTodo: () => object;
  chooseStatus: () => Promise<void>;
}

module.exports = class Todo implements ITodo {
  #_id: number;
  #dateStart: number;
  #dateEnd: number;
  #title: string;
  #status: statusType;

  constructor(
    title: string,
    dateStart: number,
    dateEnd: number,
    status: statusType,
    id: number
  ) {
    this.#_id = id;
    this.#title = title;
    this.#dateStart = dateStart;
    this.#dateEnd = dateEnd;
    this.#status = status;
  }

  get id() {
    return this.#_id;
  }
  set id(id: number) {
    this.#_id = id;
  }

  markAsComplated() {
    this.status = "completed";
  }
  markAsInProgress() {
    this.status = "in-progress";
  }

  set title(title: string) {
    this.#title = title;
  }

  get title(): string {
    return this.#title;
  }

  set dateStart(date: number) {
    this.#dateStart = date;
  }

  get dateStart(): number {
    return this.#dateStart;
  }

  set dateEnd(date: number) {
    this.#dateEnd = date;
  }

  async chooseStatus(): Promise<void> {
    let chosenStatus = await UserInputHandler.question(
      "Task Status : \n1 - Not Started\n2 - In Progress\n3 - Completed\n "
    );
    switch (chosenStatus) {
      case "1":
        this.#status = "not-started";
        break;
      case "2":
        this.#status = "in-progress";
        break;
      case "3":
        this.#status = "completed";
        break;
      default:
        console.log("Invalid status choice, please choose 1, 2, or 3");
        await this.chooseStatus();
        break;
    }
  }

  get dateEnd(): number {
    return this.#dateEnd;
  }

  set status(status: statusType) {
    this.#status = status;
  }

  get status(): statusType {
    return this.#status;
  }

  public getTodo() {
    return {
      _id: this.#_id,
      title: this.#title,
      dateStart: this.#dateStart,
      dateEnd: this.#dateEnd,
      status: this.#status,
    };
  }
};
