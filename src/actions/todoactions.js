import { addTodo,editTodo,finishTodo,delTodo } from "../constants/constants"
export const ADD_TODO=(editText)=>({type:addTodo,payload:{todoText:editText}})
export const DEL_TODO=(todoId)=>({type:delTodo,payload:{todoId}})
export const FINISH_TODO=(todo,isFinished)=>({type:finishTodo,payload:{todo,isFinished}})
export const EDIT_TODO=(todo,todoText)=>({type:editTodo,payload:{todo,todoText}})