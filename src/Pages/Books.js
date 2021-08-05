import React from 'react'
import Modalbooks from '../Componets/Modals/Modal'


const Books = (props) => {
    return(
        <>
        <div className = 'book-list'>
        {props.books.map((book, index) => {
             let  description = () => {                   
                 alert( `${book.description}`)                 
           }
        return (
            <div className = 'books' > 
               
                <Modalbooks book ={book}/>
            </div>
        
        )})}
        </div>
        </>
    )

        }
export default Books
