import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const categories = [
  

  {
    id: 'Meals',
    children: [
      {
        id: 'Menu',
        icon: <RestaurantMenuIcon />
      },
      { id: 'History', icon: <HistoryIcon /> },
      { id: 'Settings', icon: <SettingsIcon /> },
      { id: 'Feedback', icon: <ChatIcon /> }
    ],
  },
  {
    id: 'About us',
    children: [
      { id: 'Our Story', icon: <AutoStoriesIcon /> },
      { id: 'Our People', icon: <PeopleIcon /> },
      { id: 'Our Partners', icon: <HandshakeIcon /> },
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {

  const [select,setSelect]=useState({
    'Menu':true,
    'History':false,
    'Feedback':false,
    'Our Story':false,
    'Our People':false,
    'Our Partners':false
  })
  const { ...other } = props;

  const navigate=useNavigate();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
      <ListItem >
          <img src={`${process.env.PUBLIC_URL}/reyum.png`} height={200} width={200}/>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: 'rgb(143, 175, 143)' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={select[childId]} sx={item} onClick={()=>{const myObject=select;for (const property in myObject){
                  if (property!=childId){
                    myObject[property]=false
                  }
                  else{
                    myObject[property]=true
                  }
                };setSelect(myObject);navigate('/'+childId.split(' ')[0]+(childId.split(' ')[1]?childId.split(' ')[1]:''))}}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}