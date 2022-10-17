import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Content from './pages/Content';
import Navigator from './pages/Navigator';
import Header from './pages/Header';
import Paperbase from './pages/Paperbase';
import { Route,Routes } from 'react-router-dom';

//Toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

function App() {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);

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
            <Route path='/' element={<Paperbase />}>
              {/* <Route path="Login" element={<Login/>}/>
              <Route path="Register" element={<Register />}/> */}
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
  );
}

export default App;
