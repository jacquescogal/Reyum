import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
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

function App() {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(()=>{
    fetch("/api")
    .then((res)=>res.json())
    .then((data)=>setData(data.message));
  },[]);

  return (
    <div className="App">
        <ToastContainer/>
        <Backdrop
        sx={{ color: 'white',bgcolor:'rgba(255, 255, 255, 0.5)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <p>loading...</p>
        <CircularProgress color="primary" />
      </Backdrop>
        <Routes>
            <Route path='/' element={<Homepage mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>}>
              <Route path="Menu" element={<Order/>}/>
              <Route path="History" element={<History />}/> 
              <Route path="Feedback" element={<Feedback />}/>
              <Route path="Settings" element={<Settings />}/>
              <Route path="OurStory" element={<OurStory />}/>
              <Route path="OurPeople" element={<OurPeople />}/>
              <Route path="OurPartners" element={<OurPartners />}/>
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
  );
}

export default App;
