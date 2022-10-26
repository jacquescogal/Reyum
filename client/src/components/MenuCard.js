import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const PopupCard = ({price=7.5,setMenuOpen,imgSrc}) => {
  const [sizer,setSizer]=useState({s:false,m:true,l:false});
  const [broccoli,setBroccoli]=useState(0)
  const [kale,setKale]=useState(0)
  const [carrot,setCarrot]=useState(0)

  const [pax,setPax]=useState(1)

  const [sizePrice,setSizePrice]=useState(0)

  const [chicken,setChicken]=useState(0)
  const [beef,setBeef]=useState(0)
  const [salmon,setSalmon]=useState(0)

  useEffect(()=>{
    setSizer({s:false,m:true,l:false})
    setBroccoli(0)
    setKale(0)
    setCarrot(0)
    setPax(1)
    setSizePrice(0)
    setChicken(0)
    setBeef(0)
    setSalmon(0)
  },[imgSrc])

  return (
    <div class=" relative max-w-sm h-fit bg-orange-100 rounded-lg border border-gray-200 shadow-md">
        <button type="button" class="absolute right-0 top-0 bg-red-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={()=>{setMenuOpen(false)}}>
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    <a >
        <img class="h-48 w-96 object-cover rounded-t-lg" src={imgSrc} alt="" />
    </a>
    <div class="p-2">
        <a >
            <h5 class="mb-2 mt-0 text-4xl font-bold tracking-tight text-red-400">Chicken Curry</h5>
        </a>
        <p class='text-black text-2xl font-sans'>Add Ons:</p>
        <p class='text-black grid grid-cols-6 bg-orange-200 p-1'>

        <div class='underline font-semibold'>Vegetables:</div>
        <div></div>
        <div class='relative'>
          <span>Carrot</span>
          </div>
          <div class='relative'>
          <button class={(carrot>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(carrot>0)?setCarrot(carrot-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{carrot}</span>
          </div>
          <div class='relative'>
          <button class={(carrot<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(carrot<2)?setCarrot(carrot+1):console.log(e)}}>+</button>
          </div>
          <div></div>

        <div></div>
        <div class='relative'>
          <span>Kale</span>
          </div>
          <div class='relative'>
          <button class={(kale>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(kale>0)?setKale(kale-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{kale}</span>
          </div>
          <div class='relative'>
          <button class={(kale<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(kale<2)?setKale(kale+1):console.log(e)}}>+</button>
          </div>
          <div></div>
          
          <div></div>
          <div class='relative'>
          <span>Broccoli</span>
          </div>
          <div class='relative'>
          <button class={(broccoli>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(broccoli>0)?setBroccoli(broccoli-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{broccoli}</span>
          </div>
          <div class='relative'>
          <button class={(broccoli<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(broccoli<2)?setBroccoli(broccoli+1):console.log(e)}}>+</button>
          </div>
          <div class='underline font-semibold'>Meat:</div>

          <div></div>
          <div class='relative'>
          <span>Chicken</span>
          </div>
          <div class='relative'>
          <button class={(chicken>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(chicken>0)?setChicken(chicken-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{chicken}</span>
          </div>
          <div class='relative'>
          <button class={(chicken<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(chicken<2)?setChicken(chicken+1):console.log(e)}}>+</button>
          </div>
          <div></div>

          <div></div>
          <div class='relative'>
          <span>Beef</span>
          </div>
          <div class='relative'>
          <button class={(beef>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(beef>0)?setBeef(beef-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{beef}</span>
          </div>
          <div class='relative'>
          <button class={(beef<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(beef<2)?setBeef(beef+1):console.log(e)}}>+</button>
          </div>
          <div></div>

          <div></div>
          <div class='relative'>
          <span>Salmon</span>
          </div>
          <div class='relative'>
          <button class={(salmon>0)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(salmon>0)?setSalmon(salmon-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{salmon}</span>
          </div>
          <div class='relative'>
          <button class={(salmon<2)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(salmon<2)?setSalmon(salmon+1):console.log(e)}}>+</button>
          </div>
          <div></div>

          <div class='relative'>
          <span>Pax</span>
          </div>
          <div class='relative'>
          <button class={(pax>1)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"}  onClick={(e)=>{(pax>0)?setPax(pax-1):console.log(e)}}>-</button>
          </div>
          <div class='relative'>
          <span>{pax}</span>
          </div>
          <div class='relative'>
          <button class={(pax<10)?"w-8 h-8 rounded-full bg-slate-50 border border-black hover:bg-gray-100":"invisible"} onClick={(e)=>{(pax<10)?setPax(pax+1):console.log(e)}}>+</button>
          </div>
          <div></div>
        </p>
        <div class="grid grid-cols-5 mb-1">
          <div></div>
          <div class='relative'>
          <button class={(sizer['s']===true)?"border-black border-2 text-white font-bold w-8 h-8 rounded-full bg-green-700 hover:bg-green-700":"w-8 h-8 rounded-full bg-green-300 hover:bg-green-700"} onClick={()=>{setSizer({s:true,m:false,l:false});setSizePrice(-2.5)}}>S</button>

          </div>

          <div class='relative'>
          <button class={(sizer['m']===true)?"border-black border-2 text-white font-bold w-8 h-8 rounded-full bg-green-700 hover:bg-green-700":"w-8 h-8 rounded-full bg-green-300 hover:bg-green-700"} onClick={()=>{setSizer({s:false,m:true,l:false});setSizePrice(0)}}>M</button>

          </div>
          <div class='relative'>
          <button class={(sizer['l']===true)?"border-black border-2 text-white font-bold w-8 h-8 rounded-full bg-green-700 hover:bg-green-700":"w-8 h-8 rounded-full bg-green-300 hover:bg-green-700"} onClick={()=>{setSizer({s:false,m:false,l:true});setSizePrice(2.5)}}>L</button>

          </div>
        </div>
        <p class='font-bold text-xl text-black'>${pax*(price+2*chicken+2*beef+3*salmon+1*carrot+1*kale+1*broccoli+sizePrice)}</p>
        <button  class="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={()=>{setMenuOpen(false);toast.error('Cart to be implemented in future build - Reyum Engineering Lead J')}}>
            Add!
        </button>
    </div>
    
</div>
  )
}

export default PopupCard