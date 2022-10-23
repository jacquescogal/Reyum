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



const Header=({tabSelect,setTabSelect})=> {

  return (
      <div class='flex justify-center bg-white width-5/6'>
          <button class={(tabSelect['Signature']==false)?'text-center text-black font-sans font-semibold w-60 h-10 hover:bg-orange-100':'text-center text-black font-sans font-semibold w-60 h-10 bg-orange-100'} onClick={()=>{
            setTabSelect({
              Signature:true,
              Vegetarian:false,
              Plus:false
            });
          }}>Signatures
          <span class='text-xl'>🍳</span>
          </button>
          <button class={(tabSelect['Vegetarian']==false)?'text-center text-black font-sans font-semibold w-60 h-10 hover:bg-orange-100':'text-center text-black font-sans font-semibold w-60 h-10 bg-orange-100'} onClick={()=>{
            setTabSelect({
              Signature:false,
              Vegetarian:true,
              Plus:false
            });
          }}>Vegetarian
          <span class='text-xl'>🥕</span>
          </button>
          <button button class={(tabSelect['Plus']==false)?'text-center text-black font-sans font-semibold w-60 h-10 hover:bg-orange-100':'text-center text-black font-sans font-semibold w-60 h-10 bg-orange-100'} onClick={()=>{
            setTabSelect({
              Signature:false,
              Vegetarian:false,
              Plus:true
            });
          }}>Plus+
          <span class='text-xl'>⭐</span>
          </button>
      </div>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;