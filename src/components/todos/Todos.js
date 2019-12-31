import React,{useState,useEffect} from 'react';
import ToDoItem from './ToDoItem';
import NewTask from './NewTask';



const Todos = () => {
const [todos,setTodos]=useState([]);
const [newTask,setTask]=useState('');

useEffect(()=>{
  if(!localStorage.length){
    fetch('http://jsonplaceholder.typicode.com/todos?&_limit=10')
    .then(req=>req.json())
    .then(data=>{
      setTodos(data);
    })}
  else setTodos(JSON.parse(localStorage.getItem('ToDos')));
},[]);

useEffect(()=>{
  localStorage.setItem('ToDos',JSON.stringify(todos));
},[todos]);

  return (
    <div className="to-do-App">
      <NewTask/>
      <ul>
        {todos.map(item=><ToDoItem key={item.id} completed={item.completed} title={item.title} id={item.id} />)}
      </ul>
    </div>
  )
}

export default Todos
