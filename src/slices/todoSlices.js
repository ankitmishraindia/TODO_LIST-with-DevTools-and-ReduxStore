import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todoList:[]
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todoText=action.payload.todoText;
            state.todoList.push({id:state.todoList.length+1,Name:todoText,finished:false})
            
        },
        editTodo:(state,action)=>{
            let todo=action.payload.todo;
            let todoText=action.payload.todoText;
           state.todoList=state.todoList.map((t)=>{
            if(t.id==todo.id){
                t.Name=todoText;
            }
            
            return t;
        })
      },
      todoFinish:(state,action)=>{
        let todo=action.payload.todo;
        let isFinished=action.payload.isFinished;
       state.todoList=state.todoList.map((t)=>{
           if(t.id==todo.id){
               t.isFinished=isFinished;
           }
           
           return t;
        })
      },
      deleteTodo:(state,action)=>{
        let todoId=action.payload.todoId;
        state.todoList=state.todoList.filter((t)=>t.id!=todoId)
      }
    }
})
export const {addTodo,deleteTodo,todoFinish,editTodo}=todoSlice.actions;
export default todoSlice.reducer;