
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';
import { useEffect, useState } from 'react';


import {Link} from '@mui/material';

const BasicCard = ({name,imgSrc,price}) =>{
 
  let navigate=useNavigate();
  return (
    <Grow in={true}>
      <Link to onClick= {()=>{}}>
      <Card sx={{display:'flex',flexDirection:'column',minHeight:325,maxHeight:300,minWidth:250,maxWidth:250,margin:1, ':hover':{boxShadow:'10'}, marginTop:1}}
    onClick={()=>{}}>
      <CardContent>
      <img style = {{width: 225, height:225,position:'relative',top:-20}} src = {imgSrc} alt = "" />
        <h2>{name}</h2>
        <h5 style={{ color:'grey'}}>Starting from {price}</h5>
      </CardContent>
      </Card>
      </Link>
    </Grow>
  );

  

  
}

export default BasicCard;