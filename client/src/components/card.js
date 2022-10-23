
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


import {Link} from '@mui/material';

const BasicCard = ({name,imgSrc,price}) =>{
 
  let navigate=useNavigate();
  return (
    <div class="relative w-fit max-w-fit max-h-xs h-fit overflow-hidden mx-2.5 mt-2 rounded-lg border border-gray-0 shadow-md group ">
    <img class="transition ease-in-out object-cover h-48 w-96 rounded-tr-lg rounded-bl-lg group-hover:scale-150" src = {imgSrc} alt = "" />
    <div class="absolute bg-black/50 text-white w-full h-full transform duration-500 top-[80%] bottom-[90%] content-center group-hover:-inset-y-0">
    <p class="">{name}</p>  
    </div>
    
</div>
  );

  

  
}

export default BasicCard;