import React from 'react'
import { IoPowerSharp } from 'react-icons/io5'
//map over array/genres if genre is kids display it
const Trending = (props) =>{
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll'
    }
 
    return (
        <>
        <div>
            Trending!
        </div>
        {/* {props.trend.ranking < 7 && > 0 ?  */}
        <div className= 'Trends'style= {divStyle} > 
            {/* // ranking < 7 show all books */}
            
            {props.trend.map((book, index) => {
                //   const handleClick = () => {
                //     return(
                //         <>
                //         {/* <span> Title: {props.trend.title}</span> */}
                //         <span> Title: {book.title}</span>
                //         <span>author: {book.author}</span>
                //         <span>{book.cover}</span>
                //         <span>Description: {book.description}</span>
                //         </>
            
                //     )
                // }
               if (book.ranking < 7 && book.ranking > 0){ 
                return (
                 <div key ={index} >
                    {/* handle click goes here */}
                    <img key = {index}  src= {book.cover} alt = {book.title} />
                    
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