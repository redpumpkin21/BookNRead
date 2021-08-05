import React from 'react'
import Modalupcoming from './Modals/Modalupcoming'
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
                        <Modalupcoming book = {book}/>
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