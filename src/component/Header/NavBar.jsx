// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import {  Toolbar, Button,Typography} from '@mui/material';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import { Link } from 'react-router-dom';
// const NavBar = () => {
//   return (
//     <>
//   <AppBar sx={{backgroundColor:'white', position:'fixed'}}>
//   <Toolbar>
//     <AutoStoriesIcon color='primary'/>
//     <Link to={'/signin'}>
//     <Button  sx={{marginLeft:'500%'}}variant='outlined'>Logout</Button>
//     </Link>
//    </Toolbar>
//   </AppBar>
//     </>
//   )
// }

// export default NavBar


import React, { useState } from 'react'
import '../../assert/Narbar.css'
import { FaBars } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const NavBar = ({data}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <>
            <header>
              <div>
               <center><FaBookOpenReader className='logo' /></center> 
                <h2>BookReview</h2>
              </div>
              <input type="checkbox" id='menu_check'/>
              <label for="menu_check">
              <FaBars id='menu_bar'/>

              </label>
              <nav className='navbar'>
                <ul >
                    <li>
                        <NavLink to="/Home" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Home
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/about" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Reviews
                        </NavLink>
                    </li>
                  
                    <li>
                        <NavLink to="/signin" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Log Out
                        </NavLink>
                    </li>
                </ul>
              </nav>
          </header>
    </>

  )
}

export default NavBar
