import React, { useState } from 'react'

const HoverCard = ({cardObject}) => {
    const [good,setGood]=useState(true);

    const toggleGood=()=>{
        setGood(!good);
    }
  return (
    <>
    {(good==true)?
    <div class="relative group w-full h-96 overflow-hidden bg-black m-auto">
  <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={cardObject.imageLink} />
  <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
  <div class="absolute bg-gradient-to-t from-green-400 w-full h-full transform duration-500 inset-y-3/4 content-center group-hover:-inset-y-0">
    <div class="absolute w-full flex place-content-center">
      <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10 group-hover:underline">{cardObject.title}</p>
    </div>
    <div class="absolute w-full flex place-content-center mt-20">
      <p class="font-sans text-center w-4/5 text-white mt-5">{cardObject.description}</p>
    </div>
    <div class="absolute w-full flex place-content-center bottom-16">
    <button class="absolute bottom-16 bg-slate-100 text-black font-bold rounded-lg h-10 w-48 hover:bg-slate-500" onClick={()=>{toggleGood()}}>The Problem</button>
    </div>
  </div>
</div>:
<div class="relative group w-full h-96 overflow-hidden bg-black m-auto">
  <img class="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={cardObject.antiLink} />
  <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
  <div class="absolute bg-gradient-to-t from-red-400 w-full h-full transform duration-500 inset-y-3/4 content-center group-hover:-inset-y-0">
    <div class="absolute w-full flex place-content-center">
      <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10 group-hover:underline">{cardObject.antiTitle}</p>
    </div>
    <div class="absolute w-full flex place-content-center mt-20">
      <p class="font-sans text-center w-4/5 text-white mt-5">{cardObject.antiDescription}</p>
    </div>
    <div class="absolute w-full flex place-content-center bottom-16">
    <button class="absolute bottom-16 bg-slate-100 text-black font-bold rounded-lg h-10 w-48 hover:bg-slate-500" onClick={()=>{toggleGood()}}>Our Solution</button>
    </div>
  </div>
</div>}
</>
  )
}

export default HoverCard