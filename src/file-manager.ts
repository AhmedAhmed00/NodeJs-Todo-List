import { ITodo } from "./todo";
const fs = require("fs")
const UserInputHandler = require("./user-input-handler")
const Todo  = require("./todo")


module.exports = class FileManager {
     private  static  _filePath = "todos.json"
     static isExistingFile(filePath:string):boolean{ 
      if (fs.existsSync(filePath)){ 
       return true
      }
      else{ 
        return false
      }
     }
    

  static loadTodos():ITodo[]   { 
    if(this.isExistingFile(this._filePath)){ 
      try{ 
    const todosJson = fs.readFileSync(this._filePath, { encoding: "utf-8" });
    const todosParsed:ITodo[] = JSON.parse(todosJson);
    const todos = todosParsed.map((todo) => { 
      return Object.assign(new Todo() , todo)
    })
    return todos
    }
    catch(err){ 
        return []
    }
    }
    else{ 
     return []
    }
    
  }


  static saveTodos(todos:ITodo[]) {
  console.log(todos)
    fs.writeFile(this._filePath, JSON.stringify(todos), (err:Error) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
  } else {
    console.log('File updated successfully!');
   UserInputHandler.close()
  }
    });
    
  }

}


