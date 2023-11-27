import { useState } from "react";


function Todo({task,isFinished,changeFinished,deleteOne,editTodo}){
         const [finished,setFinished]=useState(isFinished)
         const [editedText,setEditText]=useState(task)
         const [isEdit,setIsEdit]=useState(false)
    return(
        <div>
            <input type="checkbox" checked={finished} onChange={
                e=>{setFinished(e.target.checked)
                changeFinished(e.target.checked)}}/>
            {(!isEdit)?task:<input type="text" value={editedText} onChange={e=>setEditText(e.target.value)} placeholder={task}/>}
            <button onClick={()=>{
                setIsEdit(!isEdit)
                editTodo(editedText)}}>
            {(isEdit)?"Save":"Edit"}</button>
            <button onClick={deleteOne}>Delete</button>
        </div>
    )
}
export default Todo;