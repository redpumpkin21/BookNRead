import React from 'react'

const Kids = (props) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
    }

    return(
        <>
        <div>Kid Books!</div>   
        <div className= 'Kids'style= {divStyle} >                       
            {props.trend.map((book, index) => {
               if (book.genre === 'Kids'){                
                return (
                <div key = {index}>
                 <div>
                    <img src= {book.cover} alt = {book.title}/>                    
                 </div>
                 </div>
                )
            }else {
                return null
            }            
        })}
        </div>     
        </>
    )
}
export default Kids