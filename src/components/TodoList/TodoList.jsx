import { useContext} from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";
function TodoList(){
   const {list}=useContext(TodoContext);
   const {dispatch}=useContext(TodoDispatchContext)

    function changeFinished(todo,isFinished){
        dispatch({type:'change_finish',payload:{todo,isFinished}})
    }

    function deleteOne(todo){
        dispatch({type:'delete_todo',payload:{todo}})
    }

    function editTodo(todoText,todo){
        dispatch({type:'edit_todo',payload:{todo,todoText}})
    }

   
    return(
        <div>
           {list.length>0&&list.map((todo)=><Todo key={todo.id}
                                   Id={todo.id} 
                                   task={todo.Name}
                                   isFinished={todo.finished}
                                   changeFinished={(isFinished)=>changeFinished(todo,isFinished)}
                                   deleteOne={()=>deleteOne(todo)}
                                  editTodo={(todoText)=>editTodo(todoText,todo)}
                                   />)}
        </div>
    )
}
export default TodoList;