import React,{useState,useEffect} from 'react';


const Todos = () => {
const [toDos,setToDo]=useState([]);

useEffect(()=>{
  if(localStorage.length) setToDo(JSON.parse(localStorage.getItem('ToDos')))
  else throw new Error('no data in storage');
},[])
console.log(toDos)
  return (
    <div>
      Hello from todos
    </div>
  )
}

export default Todos
