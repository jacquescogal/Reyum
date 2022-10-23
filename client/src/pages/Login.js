import React from 'react'
import LoginHeader from './LoginHeader'
import { useState } from 'react'
import { toast } from 'react-toastify'
const Login = () => {
    const [login,setLogin]=useState(true)
  return (
    <div>
        <LoginHeader login={login} setLogin={setLogin}/>
        {(login==true)?<div class="bg-gradient-to-b from-orange-100 to-orange-200" >
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Email</span>
        </div>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John.Doe@company.com" required/>
        </div>
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Password</span>
            </div>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
        </div>
        </div>
        <div class="flex items-start mb-1">
        </div>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={()=>{toast.error("Beta does not support login")}}>Submit</button>
        <div class="flex items-start h-1"/>
</div>:
        <div class="bg-gradient-to-b from-orange-100 to-orange-200">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">First Name</span>
            </div>
            <input type="text" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required/>
        </div>
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Last Name</span>
            </div>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required/>
        </div>

        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Phone Number</span>
            </div>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="+65 1234 5678" required/>
        </div>
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Email</span>
        </div>
            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John.Doe@company.com" required/>
        </div>
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Password</span>
            </div>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
        </div>
        <div class="col-span-1">
        <div class="relative h-8">
            <span class="absolute left-0">Confirm Passowrd</span>
            </div>
        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
        </div>
        </div>
        <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={()=>{toast.error("Beta does not support register")}}>Submit</button>
        <div class="flex items-start h-1"/>
</div>}
    </div>
  )
}

export default Login