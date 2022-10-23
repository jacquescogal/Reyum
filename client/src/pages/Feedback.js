import React, { useEffect } from 'react'

const Feedback = ({setPageTitle}) => {
  useEffect(()=>{
    setPageTitle("Help Desk")
  },[])
  return (
    <div >
      <div class="w-screen flex justify-center bg-gradient-to-t from-orange-100 to-orange-200">
      <img class="h-96 object-contain m-0" src='https://images.unsplash.com/photo-1605433246995-23f532d1e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      </div>
      <div class="bg-orange-100 p-2 grid grid-row-3 grid-col-1">
      <span class="text-5xl font-sans font-semibold underline">Contact Us</span>
      <span class="text-base no-underline">Hotline: +65 1234-5678</span>
      <span class="text-base no-underline">E-Mail: support@reyum.com</span>
      </div>
    </div>
  )
}

export default Feedback