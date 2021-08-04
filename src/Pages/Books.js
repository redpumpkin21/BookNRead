import React from 'react'
const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '20%',

}


const Books = (props) => {
    return(
        <>
        <div>
        {props.books.map((book, index) => {
            // const handleClick = ()=> {
            //     return(
            //         <span style = {{"display": "block"}}>{book.description}</span>
            //     )}
            let  description = () => {
                console.log('it reads me clicking')
                
                 alert( `${book.description}`)
                    
        
                }
        return (
            <div style = {divStyle}> 
                <span>{book.title}</span>
                <span>{book.author}</span>
                <img src= {book.cover} alt={book.title}/>
                <button onClick = {description} >Description
                {/* <span style = {{"display": "none"}} onClick = {{"display": "block"}}>{book.description}</span> */}
                </button>
                <span></span>
            </div>
        
        )})}
        </div>
        </>
    )

        }
export default Books
