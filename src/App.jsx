import React from 'react';
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")

  const [showFinished, setshowFinished] = useState(true)

const [todos, setTodos] = useState(() => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);
  }
  
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos);
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo('');
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

return (
    <>
      <Navbar />  
      <div className="main-con m-5">
        <div className="mx-auto py-12 p-5 bg-violet-100 rounded-xl min-h-[80vh] md:w-1/2">

          <h1 className="text-center font-bold md:text-3xl text-lg">iTask - Manage your todos at one place</h1>
          <div className="addTodo my-6">
            <h2 className="md:text-2xl text-sm font-bold my-3">Add a Todo</h2>

            <div className="flex">
            <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full px-5" />
            <button onClick={handleAdd} disabled={todo.length<=3 || todo.trim().length <= 0} className="bg-violet-800 disabled:bg-violet-700  hover:bg-violet-950 md:px-5 px-3 py-1 md:py-3 rounded-full text-white font-bold  mx-3">
              Save
            </button>
            </div>

          </div>

          <input type="checkbox" onChange={toggleFinished} checked={showFinished} id="show" /> 
          <label className="mx-2 text-sm md:text-[90%]" htmlFor="show">Show finished</label>
          
          <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-5"></div>

          <h2 className="text-lg font-bold my-3">Your Todos</h2>

          <div className="todos">
            { todos.length === 0 && <div className="m-5">No Todos to display</div> }
            
            {todos.map(item =>{ 
              
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/1 justify-between my-5 ">

                <div className="flex gap-5">

                <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} />

                <div className={item.isCompleted?"line-through":""}>
                  {item.todo}
                </div>
 
                </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 rounded-md text-white mx-1">
                <FaEdit />
                </button>
                <button onClick={(e)=> handleDelete(e, item.id)} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 rounded-md text-white mx-1">
                <AiFillDelete />
                </button>
                </div>
            </div>
        })}
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
