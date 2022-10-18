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

function Copyright() {




  return (//Link to about page
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> 
        Reyum
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;

export default function Order() {
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
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row',flexWrap:'wrap',paddingLeft:5}}>
            <BasicCard name={'Chop Suey'} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`} price={'$5.99'}/>
            <BasicCard name={'Chicken Curry'} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`} price={'$6.50'}/>
            <BasicCard name={'Ratatouille'} imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`} price={'$5.50'}/>
            <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`} price={'$5.49'}/>
            </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </>
  );
}