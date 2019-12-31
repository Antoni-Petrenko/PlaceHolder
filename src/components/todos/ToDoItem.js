import React,{useState} from 'react';

const ToDoItem = ({title, id, completed}) => {
  const [checked,setChecked]=useState(completed);
  return (
    <li style={checked?{textDecoration:"line-through"}:null}><label><input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/></label>{title} <span>X</span></li>
  )
}

export default ToDoItem
