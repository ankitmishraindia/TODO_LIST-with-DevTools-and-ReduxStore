function todoReducer(state,action){
    if(action.type=='add_todo'){
        let todoText=action.payload.todoText;
        return [
            ...state,{id:state.length+1,Name:todoText,finished:false}
        ];
    }else if(action.type=='edit_todo'){
        let todo=action.payload.todo;
        let todoText=action.payload.todoText;
        const updatedList=state.map((t)=>{
            if(t.id==todo.id){
                t.Name=todoText;
            }
            
            return t;
         })
         return updatedList;
    }else if(action.type=='delete_todo'){
        let todo=action.payload.todo;
        const updatedList=state.filter((t)=>t.id!==todo.id)
        return updatedList;
    }
    else if(action.type=='change_finish'){
         let todo=action.payload.todo;
         let isFinished=action.payload.isFinished;
        const updatedList=state.map((t)=>{
            if(t.id==todo.id){
                t.isFinished=isFinished;
            }
            
            return t;
         })
         return updatedList;
    }
}

export default todoReducer;