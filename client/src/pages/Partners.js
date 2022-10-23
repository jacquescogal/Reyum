import React, { useEffect } from 'react'
import HoverCard from '../components/HoverCard'
import HoverPartner from '../components/HoverPartner'

const Partners = ({setPageTitle}) => {
  useEffect(()=>{
    setPageTitle("Our Partners")
  },[])
  return (
    <div>
  <HoverPartner cardObject={{
        id:1,
        title:'Ugly Food',
        antiTitle:'Excess',
        description:'Ugly Food is a leading supplier of saved foods',
        antiDescription:'Over-reliance on outside dining contributes to food and package waste',
        imageLink:'http://cdn.shopify.com/s/files/1/0293/7631/5470/files/Picture_1_31907e54-cad2-488b-8e78-70b469be6595.png?v=1630970527',
        antiLink:'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    }}/>
    <HoverPartner cardObject={{
        id:2,
        title:'Packing Green',
        antiTitle:'Excess',
        description:'Packing Greens provides biodegradable packaging solutions so as to minimize our environmental impact',
        antiDescription:'Over-reliance on outside dining contributes to food and package waste',
        imageLink:'https://packinggreen.com/wp-content/uploads/2021/04/Logo-Packing-Green-5.png',
        antiLink:'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    }}/>
</div>
  )
}

export default Partners