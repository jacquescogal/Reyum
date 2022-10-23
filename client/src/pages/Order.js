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
  const [tabSelect,setTabSelect]=React.useState({
    All:true,
    Signature:false,
    Vegetarian:false,
    Plus:false
  })

  const CardSet=()=>{
    if (tabSelect['All']===true){
      return (
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
              <BasicCard name={'Chicken Curry'} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`}/>
              <BasicCard name={'Chicken Masala'} imgSrc={`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}/>
              <BasicCard name={'Chop Suey'} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`}/>
              <BasicCard name={'Jollof Rice'} imgSrc={'https://www.thespruceeats.com/thmb/9x4pFDArXhkUoiI2MqETFEr00qQ=/3333x3333/smart/filters:no_upscale()/NigerianJollofwithBeef_17-01-6d2e6477a95a4ab28ebd14f50d71c7fb.JPG'}/>
              <BasicCard name={'Ratatouille'} imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`}/>
              <BasicCard name={'Salmon Bowl'} imgSrc={'https://fitfoodiefinds.com/wp-content/uploads/2020/05/fiest-salmon-bowls-1sq.jpg'}/>
              <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`}/>
               <BasicCard name={'Vegan Burger'} imgSrc={`https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80`}/>
          </div>
      )
      }
    else if (tabSelect['Signature']===true){
    return (
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
            
            
           
            <BasicCard name={'Chop Suey'} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`}/>
            <BasicCard name={'Jollof Rice'} imgSrc={'https://www.thespruceeats.com/thmb/9x4pFDArXhkUoiI2MqETFEr00qQ=/3333x3333/smart/filters:no_upscale()/NigerianJollofwithBeef_17-01-6d2e6477a95a4ab28ebd14f50d71c7fb.JPG'}/>
        </div>
    )
    }
    else if (tabSelect['Vegetarian']===true){
      return (
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
              
              <BasicCard name={'Ratatouille'} imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`}/>
              <BasicCard name={'Vegebowl'} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`}/>
              <BasicCard name={'Vegan Burger'} imgSrc={`https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80`}/>
             
          </div>
      )
      }
      else if (tabSelect['Plus']===true){
        return (
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
                
                <BasicCard name={'Chicken Curry'} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`}/>
                <BasicCard name={'Chicken Masala'} imgSrc={`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}/>
                <BasicCard name={'Salmon Bowl'} imgSrc={'https://fitfoodiefinds.com/wp-content/uploads/2020/05/fiest-salmon-bowls-1sq.jpg'}/>
            </div>
        )
        }
  }


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
          <OrderHeader tabSelect={tabSelect} setTabSelect={setTabSelect}/>
          <CardSet/>
        </Box>
      </Box>
    </>
  );
}