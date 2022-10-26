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
import MenuCard from '../components/MenuCard';
import { Backdrop } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';


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

  const myRef=React.useRef(null);

  const [menuOpen,setMenuOpen]=React.useState(false)
  const [imgSrc,setImgSrc]=React.useState('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')
  const [price,setPrice]=React.useState(7.5)

  useEffect(()=>{
    setPageTitle('Menu')
  },[])
  
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tabSelect,setTabSelect]=React.useState({
    All:true,
    Signature:false,
    Rotation:false,
    Vegetarian:false,
    Plus:false
  })

  const CardSet=()=>{
    if (tabSelect['All']===true){
      return (
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
              <BasicCard name={'Beef Pho'} price={7.5} setPrice={setPrice}   nutDict={{p:21,f:10,c:23}}   setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={3} time={"45 min"} description={"Pho-bulous"} imgSrc={'https://images.unsplash.com/photo-1463424591693-a7c7ed4e3342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}/>
              <BasicCard name={'Chicken Curry'} price={10} setPrice={setPrice} nutDict={{p:25,f:15,c:15}} setMenuOpen={setMenuOpen} setImgSrc={setImgSrc} ease={1} time={"45 min"} description={"Curry favour with this delicious meal!"} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`} />
              <BasicCard name={'Chicken Masala'} price={10} setPrice={setPrice}  nutDict={{p:24,f:10,c:17}} setMenuOpen={setMenuOpen} setImgSrc={setImgSrc} ease={2} time={"40 min"} description={"Chicken spice and everything nice"} imgSrc={`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}/>
              <BasicCard name={'Chop Suey'} price={7.5} setPrice={setPrice}  nutDict={{p:20,f:12.5,c:28}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"20 min"} description={"Chop chop, a quick delicious meal"} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`}/>
              <BasicCard name={'Jollof Rice'} price={7.5} setPrice={setPrice}  nutDict={{p:10,f:8,c:27}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"30 min"} description={"Get jolly-off rice"} imgSrc={'https://www.thespruceeats.com/thmb/9x4pFDArXhkUoiI2MqETFEr00qQ=/3333x3333/smart/filters:no_upscale()/NigerianJollofwithBeef_17-01-6d2e6477a95a4ab28ebd14f50d71c7fb.JPG'}/>
              <BasicCard name={'Ratatouille'} price={7.5} setPrice={setPrice}  nutDict={{p:7,f:6,c:25}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={3} time={"40 min"} description={"Release your little chef"}imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`}/>
              <BasicCard name={'Salmon Bowl'} price={10} setPrice={setPrice}  nutDict={{p:15,f:28,c:10}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"20 min"}description={"Salmon your inner chef"}imgSrc={'https://fitfoodiefinds.com/wp-content/uploads/2020/05/fiest-salmon-bowls-1sq.jpg'}/>
              <BasicCard name={'Sausage with potatoes'} price={7.5} setPrice={setPrice}    nutDict={{p:23,f:21,c:20}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={2} time={"30 min"} description={"Don't fix what isn't broken"} imgSrc={`https://images.unsplash.com/photo-1643094265054-8b17defec1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}/>
              <BasicCard name={'Vegebowl'} price={7.5} setPrice={setPrice}  nutDict={{p:5,f:13,c:25}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"15 min"} description={"Can't go wrong with vegetables"} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`}/>
               <BasicCard name={'Vegan Burger'} price={7.5} setPrice={setPrice}  nutDict={{p:16,f:10,c:20}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={2} time={"30 min"}description={"The future is here"} imgSrc={`https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80`}/>
          </div>
      )
      }
    else if (tabSelect['Signature']===true){
    return (
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
            
            
           
            <BasicCard name={'Chop Suey'} price={7.5} setPrice={setPrice}   nutDict={{p:20,f:12.5,c:28}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"20 min"} description={"Chop chop, a quick delicious meal"} imgSrc={`${process.env.PUBLIC_URL}/chopsuey.jpg`}/>
              <BasicCard name={'Jollof Rice'} price={7.5} setPrice={setPrice}   nutDict={{p:10,f:8,c:27}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"30 min"} description={"Get jolly-off rice"} imgSrc={'https://www.thespruceeats.com/thmb/9x4pFDArXhkUoiI2MqETFEr00qQ=/3333x3333/smart/filters:no_upscale()/NigerianJollofwithBeef_17-01-6d2e6477a95a4ab28ebd14f50d71c7fb.JPG'}/>
        </div>
    )
    }
    else if (tabSelect['Rotation']===true){
      return (
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
              
              
             
              <BasicCard name={'Sausage with potatoes'} price={7.5} setPrice={setPrice}    nutDict={{p:23,f:21,c:20}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={2} time={"30 min"} description={"Don't fix what isn't broken"} imgSrc={`https://images.unsplash.com/photo-1643094265054-8b17defec1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}/>
                <BasicCard name={'Beef Pho'} price={7.5} setPrice={setPrice}   nutDict={{p:21,f:10,c:23}}   setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={3} time={"45 min"} description={"Pho-bulous"} imgSrc={'https://images.unsplash.com/photo-1463424591693-a7c7ed4e3342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}/>
          </div>
      )
      }
    else if (tabSelect['Vegetarian']===true){
      return (
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
              
              <BasicCard name={'Ratatouille'} price={7.5} setPrice={setPrice}   nutDict={{p:7,f:6,c:25}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={3} time={"40 min"} description={"Release your little chef"}imgSrc={`${process.env.PUBLIC_URL}/ratatouille.jpg`}/>
              <BasicCard name={'Vegebowl'} price={7.5} setPrice={setPrice}   nutDict={{p:5,f:13,c:25}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"15 min"} description={"Can't go wrong with vegetables"} imgSrc={`${process.env.PUBLIC_URL}/vegebowl.jpg`}/>
               <BasicCard name={'Vegan Burger'} price={7.5} setPrice={setPrice}   nutDict={{p:16,f:10,c:20}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={2} time={"30 min"}description={"The future is here"} imgSrc={`https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80`}/>
             
          </div>
      )
      }
      else if (tabSelect['Plus']===true){
        return (
          
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 content-start mb-1 flex-grow-1 bg-gradient-to-b from-orange-100 to-orange-200">
                
                <BasicCard name={'Chicken Curry'} price={10} setPrice={setPrice}   nutDict={{p:25,f:15,c:15}} setMenuOpen={setMenuOpen} setImgSrc={setImgSrc} ease={3} time={"45 min"} description={"Curry favour with this delicious meal!"} imgSrc={`${process.env.PUBLIC_URL}/curry.jpeg`} />
              <BasicCard name={'Chicken Masala'} price={10} setPrice={setPrice}   nutDict={{p:24,f:10,c:17}} setMenuOpen={setMenuOpen} setImgSrc={setImgSrc} ease={2} time={"40 min"} description={"Chicken spice and everything nice"} imgSrc={`https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80`}/>
              <BasicCard name={'Salmon Bowl'} price={10} setPrice={setPrice}   nutDict={{p:15,f:28,c:10}}  setMenuOpen={setMenuOpen}  setImgSrc={setImgSrc}  ease={1} time={"20 min"}description={"Salmon your inner chef"}imgSrc={'https://fitfoodiefinds.com/wp-content/uploads/2020/05/fiest-salmon-bowls-1sq.jpg'}/>
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
      <Backdrop
        sx={{ color: 'white',bgcolor:'rgba(255, 255, 255, 0.5)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={menuOpen}
        onClick={(e)=>{(e.target===myRef.current)?setMenuOpen(false):console.log(e)}}
        ref={myRef}
      >
        
        <MenuCard onClick={()=>{}} price={price} setMenuOpen={setMenuOpen} imgSrc={imgSrc}/>
        
      </Backdrop>
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