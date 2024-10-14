type statusType = "not-started" | "in-progress" |"completed"

 export interface ITodo {
   readonly _id: string;
  title: string;
  dateStart: number;
  dateEnd?: number;
  status: statusType;
}


module.exports = class Todo implements ITodo  { 
     readonly  _id: string;
   private  _dateStart: number;  
   private _dateEnd: number;
   private _title: string; 
   private _status: statusType;

   constructor() { 
       this._id = crypto.randomUUID(); 
       this._title = '';
       this._dateStart = Date.now()
       this._dateEnd = Date.now()
       this._status = "not-started";
   }


   set title(title: string) { 
      
       this._title = title;
   }

   get title(): string { 
       return this._title;
   }

   set dateStart(date: number) { 
       this._dateStart = date;
   }

   get dateStart(): number { 
       return this._dateStart;
   }

 
   set dateEnd(date: number) { 
       this._dateEnd = date;
   }

   get dateEnd(): number { 
       return this._dateEnd;
   }

  
   set status(status: statusType) { 
       this._status = status;
   }

   get status(): statusType { 
       return this._status;
   }
}





