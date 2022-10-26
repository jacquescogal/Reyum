import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Content from './pages/Content';
import Order from './pages/Order';
import History from './pages/History'
import Navigator from './pages/Navigator';
import Header from './pages/Header';
import Paperbase from './pages/Order';
import { Route,Routes } from 'react-router-dom';
import Homepage from './pages/Home'
import Feedback from './pages/Feedback'
import OurStory from './pages/Story'
import OurPeople from './pages/People'
import OurPartners from './pages/Partners'
import Settings from './pages/Settings'
//Toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import Home from '@mui/icons-material/Home';
import HomePage from './pages/HomePage';
import PopupCard from './components/PopupCard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [pageTitle,setPageTitle]=useState('Home')
  const [popup,setPopup]=useState(true)
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(data.message));
  },[]);

  const myRef=useRef(null);

  return (
    <div className="App">
        <ToastContainer/>
        <Backdrop
        sx={{ color: 'white',bgcolor:'rgba(255, 255, 255, 0.5)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={popup}
        onClick={(e)=>{(myRef.current==e.target)?setPopup(false):console.log(e)}}
        ref={myRef}
      >
        <PopupCard setPopup={setPopup}/>
      </Backdrop>
        <Routes>
            <Route path='/' element={<Homepage mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} pageTitle={pageTitle}/>}>
              <Route path="Login" element={<Login setPageTitle={setPageTitle}/>}/>
              <Route path="Register" element={<Register setPageTitle={setPageTitle}/>}/>
              <Route path="Home" element={<HomePage setPageTitle={setPageTitle}/>}/>
              <Route path="Menu" element={<Order setPageTitle={setPageTitle}/>}/>
              <Route path="History" element={<History setPageTitle={setPageTitle}/>}/> 
              <Route path="HelpDesk" element={<Feedback setPageTitle={setPageTitle}/>}/>
              <Route path="Settings" element={<Settings setPageTitle={setPageTitle}/>}/>
              <Route path="OurStory" element={<OurStory setPageTitle={setPageTitle}/>}/>
              <Route path="SubscriptionPlans" element={<OurPeople setPageTitle={setPageTitle}/>}/>
              <Route path="OurPartners" element={<OurPartners setPageTitle={setPageTitle}/>}/>
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
  );
}

export default App;
