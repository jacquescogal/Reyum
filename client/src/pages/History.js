import React from 'react'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useNavigate } from 'react-router-dom';

const History = ({setPageTitle}) => {
  React.useEffect(()=>{
    setPageTitle('History')
  },[])

  const navigate=useNavigate();


  return (
    <div class="h-fit bg-gradient-to-t from-gray-500/50 to-gray-500/0 grid grid-col-1 space-1 justify-center">
      <LockPersonIcon class="h-96 "/>
      <span>
        <span class="hover:underline hover:cursor-pointer" onClick={()=>{navigate('../login')}}>
          {'Login '}
        </span>
        to access
      </span>
    </div>
  )
}

export default History