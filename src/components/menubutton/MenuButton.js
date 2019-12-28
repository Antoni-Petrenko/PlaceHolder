import { IoMdMenu } from "react-icons/io";
import React,{useContext} from 'react';
import Context from '../context';
import './menuButton.scss';

const MenuButton = () => {
const {changeNavActiv}=useContext(Context);
  return (
    <div className='menu-button' onClick={changeNavActiv}>
      <IoMdMenu color='#FFC371'/>
    </div>
  )
}



export default MenuButton
