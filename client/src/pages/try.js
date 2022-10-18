//Temporarily store data here
import React from "react";
import { ReactDOM } from "react";
const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
  ]
  

  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Buy now
        </button>
      )
    }
  }
  
  
   const CardHeader=({image,category})=> {
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
  }
  
  
  const CardBody=({title,text})=> {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{title}</h2>
          
          <p className="body-content">{text}</p>
          
          <Button />
        </div>
      )
  }
  
  
  const Card =({name,imgSrc,price})=> {
      return (
        <article className="card">
          <CardHeader category={'Signature'} image={imgSrc}/>
          <CardBody title={name} text={'lol'}/>
        </article>
      )
  }
  
  
export default Card;