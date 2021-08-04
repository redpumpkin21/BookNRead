import React from 'react'

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
                let  description = () => {
                    console.log('it reads me clicking')
                    
                     alert( `${book.description}`)
                        
            
                    }            
                return (
                <>
                 
                    <img className = 'cover' src= {book.cover} alt = {book.title} key = {index}/>                    
                    <button  onClick = {description} className = 'bookauth'>{book.author}</button>
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