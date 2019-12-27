import { IoMdMenu } from "react-icons/io";
import React,{useContext} from 'react';
import Context from '../context';
import './menuButton.scss';

const MenuButton = () => {
const {navActive,changeNavActiv}=useContext(Context);
  return (
    <div className='menu-button' onClick={changeNavActiv}>
      <IoMdMenu/>
    </div>
  )
}



export default MenuButton
