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
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
const categories = [
  {
    id: 'Directory',
    children: [
      {
        id: 'Menu',
        icon: <RestaurantMenuIcon />
      },
      { id: 'Subscription Plans', icon: <LoyaltyIcon /> },
      { id: 'History', icon: <HistoryIcon /> },
      { id: 'Our Partners', icon: <HandshakeIcon /> },
      { id: 'Help Desk', icon: <HelpCenterIcon /> },
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
    'Menu':false,
    'History':false,
    'Feedback':false,
    'Our Story':false,
    'Our People':false,
    'Subscription Plans':false,
    'Home':true
  })
  const { ...other } = props;

  const navigate=useNavigate();
  

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
      <ListItem >
          <img src={`${process.env.PUBLIC_URL}/reyum.png`} height={200} width={200}/>
        </ListItem>
        <ListItem sx={{px:3,color:'#fff'}}>
        <ListItemButton selected={select['Home']} sx={item} onClick={()=>{const myObject=select;for (const property in myObject){
                  if (property!='Home'){
                    myObject[property]=false
                  }
                  else{
                    myObject[property]=true
                  }
                };setSelect(myObject);navigate('/'+'Home'.split(' ')[0]+('Home'.split(' ')[1]?'Home'.split(' ')[1]:''))}}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
          </ListItemButton>
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