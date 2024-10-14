import { ITodo } from "./todo";
const fs = require("fs")
const UserInputHandler = require("./user-input-handler")


module.exports = class FileManager {
    
     private  static  _filePath = "todos.json"
    
 

  static loadTodos() {
    try{ 
         const todosJson = fs.readFileSync(this._filePath, { encoding: "utf-8" });
    const todosParsed = JSON.parse(todosJson);
    return todosParsed
    }catch(err){ 
        console.log("error while loading todos")
        return []
    }
  
    
  }


  static saveTodos(todos:ITodo[]) {
   
   
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


