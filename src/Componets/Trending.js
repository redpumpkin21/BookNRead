import React from 'react'
import Modaltrending from './Modals/Modaltrending'

const Trending = (props) =>{
          
    return (
        <>
        <div className = 'text'>
            What is Trending:
        </div>
        <div className= 'Trends'>                         
            {props.trend.map((book, index) => {                       
            if (book.ranking < 7 && book.ranking > 0){ 
                let  description = () => {
                    console.log('it reads me clicking')                    
                     alert( `${book.description}`)           
                    }                
                return (
                 <div className ='trendies' >                    
                    <Modaltrending book ={book}/>  
                </div>
                )}else{
                    return null
                }
            })}
        </div> 
        </>
    )
}

export default Trending