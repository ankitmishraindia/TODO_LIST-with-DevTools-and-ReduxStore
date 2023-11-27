import {useReducer, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoContext from './context/TodoContext';
import todoReducer from './reducer/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';


function App() {
//   const [list,setList]=useState([
//     {id:1,Name:'todo1',isFinished:false},
//     {id:2,Name:'todo2',isFinished:false}
// ])

  const [list,dispatch]=useReducer(todoReducer,[])
  const[addText,setAddText]=useState('')
  console.log(list)
  return (
   <TodoContext.Provider value={{list}}>
    <TodoDispatchContext.Provider value={{dispatch}}>
    <div>
      <input type='text' value={addText} onChange={(e)=>setAddText(e.target.value)}/>
      <button onClick={()=>{
        dispatch({type:'add_todo',payload:{todoText:addText}})
      }
      }>Add</button>
    </div>
   <TodoList/>
 </TodoDispatchContext.Provider>
</TodoContext.Provider>
  );
}

export default App;
