import React from 'react'

const Upcoming = (props) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '179px',
        width: '120px',
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
                        <>
                        <img src = {book.cover} alt ={book.title} key = {index}
                         style={{"pointerEvents": "all"}}
                        />
                        <button>{book.author}</button> 
                        </>
                    )
                } else {
                    return(
                        null
                    )
                }})}
        </div> 
        {/* } */}
        <button className= 'author'>R. A. Salvatore</button> 
        <button className= 'author'>Stephen Kin</button>
        
        </>
    )
}
export default Upcoming