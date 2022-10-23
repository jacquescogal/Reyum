import React from 'react'

const History = ({setPageTitle}) => {
  React.useEffect(()=>{
    setPageTitle('History')
  },[])
  return (
    <div>History</div>
  )
}

export default History