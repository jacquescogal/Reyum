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
import { useEffect } from 'react';



const Header=({login,setLogin})=> {

  return (
      <div class='flex justify-center bg-white md:width-5/6'>
          <button class={(login==true)?'bg-orange-100 text-center text-xs md:text-xl text-black font-sans font-semibold w-20 md:w-60 h-10 hover:bg-orange-100'
          :'text-center text-black text-xs md:text-xl  font-sans font-semibold w-20 md:w-60 h-10 hover:bg-orange-100'} onClick={()=>setLogin(true)}>Login
          <span class='text-xl'>🔓</span>
          </button>
          <button class={(login==false)?'bg-orange-100 text-center text-black text-xs md:text-xl  font-sans font-semibold w-20 md:w-60 h-10 hover:bg-orange-100'
          :'text-center text-black text-xs md:text-xl  font-sans font-semibold w-20 md:w-60 h-10 hover:bg-orange-100'} onClick={()=>setLogin(false)}>Register
          <span class='text-xl'>🔑</span>
          </button>
      </div>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;