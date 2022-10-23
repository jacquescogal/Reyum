import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';


const lightColor = 'rgba(255, 255, 255, 0.7)';

const Header=({setMobileOpen,pageTitle})=> {

  const [menuPing,setMenuPing]=useState(true);

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0} className='bg-orange-200'>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: 'block'  }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={()=>{setMobileOpen(true);setMenuPing(false)}}
                edge="start"
              >
                <MenuIcon />
                {(menuPing==true)?<MenuIcon className='absolute animate-ping'/>:null}
              </IconButton>
            </Grid>
            
            <Grid item xs >
              <h1 className='absolute top-0 font-serif '>{pageTitle}</h1>
            </Grid>
            
            <Grid item>
            </Grid>
            
            <Grid item>
              <Tooltip title="Open cart">
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Guest account">
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="Guest" />
              </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;