import { useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodo,editTodo,deleteTodo,todoFinish } from './slices/todoSlices';




function App() {

  const dispatch=useDispatch()
  //bind actions
  const actions=bindActionCreators({addTodo,editTodo,deleteTodo,todoFinish},dispatch)
  const[addText,setAddText]=useState('')
  
  return (
  
  <>
    <div>
      <input type='text' value={addText} onChange={(e)=>setAddText(e.target.value)}/>
      <button onClick={()=>{
        actions.addTodo({todoText:addText})
      }
      }>Add</button>
    </div>
    <TodoList DEL_TODO={actions.deleteTodo} FINISH_TODO={actions.todoFinish} EDIT_TODO={actions.editTodo}/>
   </>

  );
}

export default App;
