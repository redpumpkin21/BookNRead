import React from 'react'

const Kids = (props) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'row',
        height: '179px',
        width: '120px',
    }

    return(
        <>
        <div>Kid Books!</div>   
        <div className ='Kids' style= {divStyle}   id ='crap'>                       
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
               if (book.genre === 'Kids'){                
                return (
                <>
                 
                    <img src= {book.cover} alt = {book.title} key = {index}/>                    
                    
                 </>
                )
            }else {
                return null
            }            
        })}
        </div>     
        <button></button>
        </>
    )
}
export default Kids