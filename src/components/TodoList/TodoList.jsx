
import Todo from "../Todo/Todo";
import {  useSelector } from "react-redux";
function TodoList({DEL_TODO,EDIT_TODO,FINISH_TODO}){
    
    const list=useSelector((state)=>state.todo.todoList)
    console.log(list)

    

    

   
    return(
        <div>
           {list.length>0&&list.map((todo)=><Todo key={todo.id}
                                   Id={todo.id} 
                                   task={todo.Name}
                                   isFinished={todo.finished}
                                   changeFinished={(isFinished)=>FINISH_TODO({todo,isFinished})}
                                   deleteOne={()=>DEL_TODO({todoId:todo.id})}
                                  editTodo={(todoText)=>EDIT_TODO({todo,todoText})}
                                   />)}
        </div>
    )
}
export default TodoList;