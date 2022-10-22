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
        antiTitle:'Excess',
        description:'We reduce our waste footprint by saving would-be wasted food as well as partnering with bio-degradable food packaging companies',
        antiDescription:'Over-reliance on outside dining contributes to food and package waste',
        imageLink:'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80',
        antiLink:'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        id:2,
        title:'Reuse',
        antiTitle:'Over-use',
        description:'We package re-usable easy-to-learn recipes to our customers with our weekly rotating meal-kits of which, the recipes are curated by our in-house gourmet chefs',
        antiDescription:'Over-reliance on outdoor dining has exacerbated diabetes rate in Singapore',
        imageLink:'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        antiLink:'https://images.unsplash.com/photo-1525518392674-39ba1fca2ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5oZWFsdGh5JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
        id:3,
        title:'Reyum',
        antiTitle:'Stigma',
        description:'We believe that the best way to break the ugly food stigma is to educate our customers of the deliciousness behind the ugly',
        antiDescription:'Avoidable food makes up more than half of wasted food, and from there, ugly foods make up 80% of wasted food waste',
        imageLink:'https://images.unsplash.com/photo-1629358101753-531fa5a2f661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        antiLink:'https://images.unsplash.com/photo-1562447575-88db38dcc649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }]
  return (
    <>
    <div className='bg-orange-100'>
    <p className='text-7xl xl:text-9xl bold font-serif'>reyum</p>
    <p className='text-2xl xl:text-4xl font-sans'>Afford Earth Another Day</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 content-start h-fit">
        
        {motivationCards.map(cardObject=>{
            return(
            <HoverCard cardObject={cardObject}/>
        )
        })}
    </div>
    </>
  )
}

export default HomePage