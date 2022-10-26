
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


import {Link} from '@mui/material';

const BasicCard = ({nutDict={p:16,f:5,c:15},name,ease,time,imgSrc,description,price,setPrice,setMenuOpen,setImgSrc}) =>{

  const tomatoScore=()=>{
   if (ease===3){
    return ("🍅🍅🍅")
   } 
   else if (ease===2){
    return ("🍅🍅⭕")
   }
   else if (ease===1){
    return ("🍅⭕⭕")
   }
  }


  let navigate=useNavigate();
  return (
    <div class="relative w-fit max-w-fit max-h-xs h-fit overflow-hidden mx-2.5 mt-2 rounded-lg border border-gray-0 shadow-md group ">
    <img class="transition ease-in-out object-cover h-48 w-96 rounded-tr-lg rounded-bl-lg group-hover:scale-150" src = {imgSrc} alt = "" />
    <div class="absolute bg-black/50 text-white w-full h-full transform duration-500 top-[80%] bottom-[90%] content-center group-hover:-inset-y-0 ">
    <p class="">{name}</p>
    <p class="font-sans">"{description}"</p>
    <div class="grid grid-cols-8 grid-rows-1">
      <div></div>
    <div class="grid grid-cols-4 grid-rows-2 justify-center col-span-6">
      <div class="relative w-full justify-center">
        <div class="absolute border-white border-2 w-full right-0">Carb</div>
      </div>
      <div class="relative w-full justify-center">
        <div class="border-white border-2 w-full m-auto">Protein</div>
      </div>
      <div class="relative w-full justify-center">
        <div class="border-white border-2 w-full m-auto">Fat</div>
      </div>
      <div class="relative w-full justify-center">
        <div class="absolute border-white border-2 w-full left-0">Calories</div>
      </div>

      <div class="relative w-full justify-center">
        <div class="absolute border-white border-2 w-full right-0">{nutDict.c}g</div> 
      </div>
      <div class="relative w-full justify-center">
        <div class="border-white border-2 w-full m-auto">{nutDict.p}g</div>
      </div>
      <div class="relative w-full justify-center">
        <div class="border-white border-2 w-full m-auto">{nutDict.f}g</div>
      </div>
      <div class="relative w-full justify-center">
        <div class="absolute border-white border-2 w-full left-0">{nutDict.p*4+nutDict.f*8+nutDict.c*4}kcal</div>
      </div>
    </div>
    <div></div>
    </div>

    <div class="grid grid-cols-3 grid-rows-2">
      <div class="row-span-1">
      <p class="row-span-1 mb-0">Difficulty:</p>
      {tomatoScore()}
      </div>
      <div class="row-span-1">
      <p class="row-span-1 mb-0">Time:</p>
      <span class="font-bold">{time}</span>
      </div>
      <div class="relative row-span-1">
      <button  class="absolute mt-1 left-0 items-center py-2 px-3 text-md font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-700"
      onClick={()=>{setPrice(price);setImgSrc(imgSrc);setMenuOpen(true)}}>
            Customize
        </button>
      </div>
      

    </div>
    
    </div>
    
</div>
  );

  

  
}

export default BasicCard;