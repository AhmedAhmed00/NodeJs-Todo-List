import { ITodo } from "./todo";

const UserInputHandler = require("./user-input-handler")
const FileManager = require("./file-manager")
const Todo  = require("./todo")

module.exports = class TodoList{ 
    todos:ITodo[];
    constructor(){ 
        this.todos = FileManager.loadTodos()
    }
    
  async createTodo():Promise<void>{
        const todo:ITodo = new Todo()
        // todo.status="completed"
        
        
         todo.title = await UserInputHandler.question("Task title : ")
         todo.dateStart = await UserInputHandler.question("Task starts at : ")
         todo.dateEnd = await UserInputHandler.question("Task ends at : ")
         todo.status = await UserInputHandler.question("Task status : ")
         this.todos.push(todo)
         FileManager.saveTodos((this.todos.map(t => t.getTodo())))
         UserInputHandler.close()
          
    }
    displayTodos(){ 
        
       console.log( this.todos[0].getTodo()  )

 
    }
    removeTodo(title:string){
       this.todos =  this.todos.filter(todo => todo.title !== title)
       FileManager.saveTodos(this.todos)
        
    }
    removeAllTodos(){ 
        this.todos = []
        FileManager.saveTodos([])
    }
}
