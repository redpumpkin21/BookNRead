import React from 'react'
import Modalkids from './Modals/Modalkid'
const Kids = (props) => {
    const divStyle = {
        height: '179px',
        width: '120px',
    }

    return(
        <>
        <div className = 'text'>Kid Books!</div>   
        <div className ='Kids' style= {divStyle}   id ='crap'>                       
            {props.trend.map((book, index) => {             
               if (book.genre === 'Kids'){   
                       
                return (
                <>
                    <Modalkids book = {book}/>
                    
                 </>
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