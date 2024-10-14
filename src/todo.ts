type statusType = "not-started" | "in-progress" |"completed"

 export interface ITodo {
   readonly _id: string;
  title: string;
  dateStart: number;
  dateEnd?: number;
  status: statusType;
  getTodo: () =>  object
}


module.exports = class Todo implements ITodo  { 
   readonly  _id: string;
    #dateStart: number;  
    #dateEnd: number;
    #title: string; 
    #status: statusType;

   constructor() { 
       this._id = crypto.randomUUID(); 
       this.#title = '';
       this.#dateStart = Date.now()
       this.#dateEnd = Date.now()
       this.#status = "not-started";
       console.log(this.title)
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
      _id: this._id,
      title: this.#title,
      dateStart: this.#dateStart,
      dateEnd: this.#dateEnd,
      status: this.#status,
    };

}}






