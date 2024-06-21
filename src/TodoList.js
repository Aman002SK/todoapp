// import React from 'react'
// import { useState } from 'react'

// function TodoList () {
//   const [todos, setTodos] = useState([])
//   const [inputValue, setInputValue] = useState('')

// function handleChange(e){
//   setInputValue(e.target.value)
// }

// function handleSubmit(e){
//   e.preventDefault()
//   setTodos([...todos, inputValue])
//   setInputValue('')
// }

// function handleDelete(index){
//   const newTodos = [...todos]
//   newTodos.splice(index, 1)
//   setTodos(newTodos)
// }
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <form>
//         <input type='text' value={inputValue} onChange={handleChange}/>
//         <button onClick={handleSubmit}>Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}
//           <button onClick={() =>handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TodoList;


import {useState} from 'react'

import React from 'react'

const TodoList = () => {

  const [inputValue, setInputValue] = useState()
  const [todos, setTodos] = useState([]);

  function handleChange(e){
      setInputValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(inputValue==""){
      return
    }
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  function handleDelete(index){
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }
  return (
    <>
    <div>TodoList</div>
    <form>
      <input type="text" value={inputValue} onChange={handleChange}></input>

    </form>
    
    <button onClick={handleSubmit}>Add Task</button>
    {/* <ul>{todos.map((data, index)=>{
      <li key={index}>{data}</li>
    })}</ul> */}

{todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
    
    </>
  )
}

export default TodoList