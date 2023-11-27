import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComponent = (props) => {
  const [open,setopen]=useState(false);
  return (
   <>
   <Drawer open={open}
   onClose={()=>setopen(false)}>
      <List>
        {props.name.map((item,index)=>
        { 
          return(
        <ListItemButton onClick={()=>setopen(false)}>
          <ListItemIcon>
             <ListItemText key={index}>
                 {item}
              </ListItemText>
          </ListItemIcon>
        </ListItemButton>
          )

        })}
      </List>
   </Drawer>
   <IconButton sx={{color:'White', marginLeft:'auto'}} onClick={()=>setopen(!open)}> 
   <MenuIcon />
   </IconButton>

   </>
  )
}

export default DrawerComponent
