import React from 'react'
import { toast } from 'react-toastify';

const PopupCard = ({setPopup}) => {
  return (
    <div class=" relative max-w-sm bg-orange-100 rounded-lg border border-gray-200 shadow-md">
        <button type="button" class="absolute right-0 top-0 bg-red-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={()=>{setPopup(false)}}>
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    <a >
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
    </a>
    <div class="p-5">
        <a >
            <h5 class="mb-2 mt-0 text-5xl font-bold tracking-tight text-red-400">Hello Cherry Tomato!🍅</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">Get 10% off your first purchase when you subscribe to our newsletter and you'll get first-hand updates to our latest menus, exclusives and promotions!</p>
        <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3" placeholder="E-mail" required/>
        </div>
        <button  class="inline-flex items-center py-2 px-3 text-md font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={()=>{setPopup(false);toast.success('Email Sent! Welcome onboard!')}}>
            Subscribe!
        </button>
    </div>
</div>
  )
}

export default PopupCard