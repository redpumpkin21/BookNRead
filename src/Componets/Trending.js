import React from 'react'

//map over array/genres if genre is kids display it
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
                    <img key = {index}  src= {book.cover} alt = {book.title} />
                    <button  onClick = {description}className = 'title'>{book.author}</button>     
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