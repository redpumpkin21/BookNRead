import React from 'react'

const Upcoming = (props) => {
    const divStyle = {
       
        height: '179px',
        width: '120px',
    }
    return(
        <>
        <div className = 'text'>
            Upcoming Books!
        </div>     
        <div className= 'Upcoming'style= {divStyle} >            
            {props.trend.map((book, index) => {
                if (book.released === false){
                    let  description = () =>              
                        alert( `${book.description}`)                     
                    return (
                        <>
                        <img src = {book.cover} alt ={book.title} key = {index}
                         className = 'cover'
                        />
                        <button onClick = {description} className = 'bookauth'>{book.author}</button> 
                        </>
                    )
                } else {
                    return(
                        null
                    )
                }})}
        </div>   
        </>
    )
}
export default Upcoming