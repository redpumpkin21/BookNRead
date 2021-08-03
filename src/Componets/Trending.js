import React from 'react'
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
               if (book.ranking < 7 && book.ranking > 0){ 
                return (
                 <div >
                    <img src= {book.cover} alt = {book.title} key = {index}/>
                    
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