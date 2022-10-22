
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
    <div class="max-w-xl max-h-xs h-96 mx-2.5 mt-2 rounded-lg border border-gray-0 shadow-md dark:bg-gray-0 dark:border-gray-0">
    <a href="#">
    <img class="object-cover h-48 w-96" src = {imgSrc} alt = "" />
    </a>
    <div class="p-3">
        <a >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-500">{name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
            <i class="fa fa-shopping-cart mr-2"></i>
            <AddIcon/>
        </a>
    </div>
</div>
  );

  

  
}

export default BasicCard;