import React from 'react'
import HoverCard from '../components/HoverCard'
import { useEffect } from 'react'

const HomePage = ({setPageTitle}) => {

    useEffect(()=>{
        setPageTitle('Home')
      },[])

    const motivationCards=[{
        id:1,
        title:'Reduce',
        description:'Reduce food and packaging waste',
        imageLink:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80'
    },
    {
        id:2,
        title:'Reuse',
        description:'Reduce food and packaging waste',
        imageLink:'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80'
    },
    {
        id:3,
        title:'Reyum',
        description:'Reduce food and packaging waste',
        imageLink:'https://images.unsplash.com/photo-1562447575-88db38dcc649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }]
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0 content-start mb-1 flex-grow-1">
        {motivationCards.map(cardObject=>{
            return(
            <HoverCard cardObject={cardObject}/>
        )
        })}
    </div>
  )
}

export default HomePage