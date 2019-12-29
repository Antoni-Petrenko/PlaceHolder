import React from 'react';
import {FaHome, FaCommentAlt,FaUsers} from 'react-icons/fa';
import { IoIosAlbums,IoMdPhotos,IoIosWarning } from "react-icons/io";
import { MdLocalPostOffice } from "react-icons/md";


const NavItems=[
    {
        id:121,
        icon:<FaHome className='icons'/>,
        text:'home',
        url:{
            exact:true,
            to:'/'
        }
    },
    {
        id:122,
        icon:<IoIosAlbums className='icons'/>,
        text:'albums',
        url:{
            exact:false,
            to:'/albums'
        }
    },
    {
        id:123,
        icon:<FaCommentAlt className='icons'/>,
        text:'comments',
        url:{
            exact:false,
            to:'/comments'
        }
    },
    {
        id:124,
        icon:<IoMdPhotos className='icons'/>,
        text:'photos',
        url:{
            exact:false,
            to:'/photos'
        }
    },
    {
        id:125,
        icon:<MdLocalPostOffice className='icons'/>,
        text:'posts',
        url:{
            exact:false,
            to:'/posts'
        }
    },
    {
        id:126,
        icon:<FaUsers className='icons'/>,
        text:'users',
        url:{
            exact:false,
            to:'/users'
        }
    },
    {
        id:127,
        icon:<IoIosWarning className='icons'/>,
        text:'todos',
        url:{
            exact:false,
            to:'/todos'
        }
    }
]


export default NavItems;