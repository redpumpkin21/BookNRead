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
        <div className = 'book-list'>
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
            <div className = 'books' > 
                <div className = 'book-title'>{book.title}</div>
                <div className ='book-author'>By: {book.author}</div>
                <img className = 'book-image'src= {book.cover} alt={book.title}/>
                <button className = 'book-button'onClick = {description} >
                    Description
                 </button>
                
            </div>
        
        )})}
        </div>
        </>
    )

        }
export default Books
