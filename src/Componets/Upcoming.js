import React from 'react'

const Upcoming = (props) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'row'
    }
    return(
        <>
        <div>
            Upcoming Books!
        </div>
        
         
        <div className= 'Upcoming'style= {divStyle} >            
            {props.trend.map((book, index) => {
                if (book.released === false){
                    return (
                        <img src = {book.cover} alt ={book.title} key = {index}/>
                    )
                } else {
                    return(
                        null
                    )
                }})}
        </div> 
        {/* } */}
        
        </>
    )
}
export default Upcoming