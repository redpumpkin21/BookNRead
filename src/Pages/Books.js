import React from 'react'

const Books = (props) => {
    return(
        <>
        <div>
        {props.books.map((book, index) => {
        return (
            <div> 
                <span>{book.title}</span>
                <span>{book.author}</span>
                <img src= {book.cover}/>
                <span>{book.description}</span>
                <span></span>
            </div>
        
        )})}
        </div>
        </>
    )

        }
export default Books
