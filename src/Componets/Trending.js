import React, {useState} from 'react'
import HandleClick from './handleClick'
//map over array/genres if genre is kids display it
const Trending = (props) =>{
  
    

    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll'
    }

 
    return (
        <>
        <div className = 'text'>
            What is Trending:
        </div>
        {/* {props.trend.ranking < 7 && > 0 ?  */}
        <div className= 'Trends'style= {divStyle} > 
            {/* // ranking < 7 show all books */}
            
            {props.trend.map((book, index) => {
                
             
                
               if (book.ranking < 7 && book.ranking > 0){ 
                let  description = () => {
                    console.log('it reads me clicking')
                    
                     alert( `${book.description}`)
                        
            
                    }
                
                return (
                 <div key ={index} >
                    {/* handle click goes here */}
                    <img key = {index}  src= {book.cover} alt = {book.title} />
                    <button  onClick = {description}className = 'title'>{book.author}</button>
                    {/* <div>by: {book.author}</div> */}
                    
                    
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