import React, {useState, useEffect} from 'react'
import Trending from '../Componets/Trending'
import Genres from '../Componets/Genres'
import Kids from '../Componets/Kids'
import Upcoming from '../Componets/Upcoming'
const Home = () =>{
   
    
       
    
        
        return(
          <div>
            <Genres />
            <Trending />
            <Kids />
            <Upcoming />
            </div>
        )
}
export default Home