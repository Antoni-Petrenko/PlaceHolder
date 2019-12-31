import React, {useState,useEffect} from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import NavBar from './Navbar/NavBar';
import Album from './albums/Album';
import Comments from './comments/Comments';
import Posts from './posts/Posts';
import Todos from './todos/Todos';
import Users from './users/Users';
import Photos from './photos/Photos';
import MenuButton from './menubutton/MenuButton';
import Context from './context';
import navOptions from './appOptions';

function App() {
  let [navActive,setNavActive]=useState(false);
  
function changeNavActiv(){
  navActive=!navActive;
  setNavActive(navActive);
}

return (
    <div className="wrapper">
      <Context.Provider value={{navActive,changeNavActiv,navOptions}}>
      <NavBar/>
      <MenuButton />
      <div onClick={navActive? changeNavActiv:null} className={navActive?"main-space activeNav":"main-space"}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/albums" component={Album}/>
            <Route exact path="/comments" component={Comments} />
            <Route path="/photos" component={Photos}/>
            <Route path="/posts" component={Posts}/>
            <Route exact path="/todos" component={Todos} />
            <Route path="/users" component={Users}/>
        </Switch>
      </div>
      </Context.Provider>
    </div>
  );
}

export default App;
