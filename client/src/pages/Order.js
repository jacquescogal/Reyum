import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from './Navigator';
import Content from './Content';
import OrderHeader from './OrderHeader';
import BasicCard from '../components/card';
import { useEffect } from 'react';

function Copyright() {




  return (//Link to about page
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit"> 
        Reyum
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;

export default function Order({setPageTitle}) {
  

  useEffect(()=>{
    setPageTitle('Menu')
  },[])
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '90%' }}>
        <CssBaseline />
        <Box
          component="nav"
        >
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <OrderHeader/>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 content-start mb-1 flex-grow-1">
            <BasicCard name={'Chop Suey'} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`} price={'$5.99'}/>
            <BasicCard name={'Chicken Curry'} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`} price={'$6.50'}/>
            <BasicCard name={'Ratatouille'} imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`} price={'$5.50'}/>
            <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`} price={'$5.49'}/>
            <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`} price={'$5.49'}/>
            <BasicCard name={'Chop Suey'} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`} price={'$5.99'}/>
            <BasicCard name={'Chicken Curry'} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`} price={'$6.50'}/>
            <BasicCard name={'Ratatouille'} imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`} price={'$5.50'}/>
            <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`} price={'$5.49'}/>
            <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`} price={'$5.49'}/>
          </div>
        </Box>
      </Box>
    </>
  );
}