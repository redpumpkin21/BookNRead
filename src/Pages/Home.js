import React from 'react'
import Trending from '../Componets/Trending'
import Genres from '../Componets/Genres'
import Kids from '../Componets/Kids'
import Upcoming from '../Componets/Upcoming'
import Carousel2 from '../Componets/Carousel2'


const Home = (props) =>{ 
     return(
          <div className ='main'>
            <Carousel2 trend = {props.books} />
            <Genres trend={props.books} /> 
            <Trending trend={props.books}/>
            <Kids trend={props.books}/>          
            <Upcoming trend={props.books}/>
            
            </div>
        )
}
export default Home