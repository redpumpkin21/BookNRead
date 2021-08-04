import React, {useState, useEffect} from 'react'
import Trending from '../Componets/Trending'
import Genres from '../Componets/Genres'
import Kids from '../Componets/Kids'
import Upcoming from '../Componets/Upcoming'
import Carousel2 from '../Componets/Carousel2'
import Form from '../Componets/Forms'

const Home = (props) =>{
  //  const apiKey='https://cdn.contentful.com/spaces/lqgw03zjuy3r/environments/master/entries?access_token=IxLPmtOyDSuJ7FVVftr9sAg5Qf0RdJcxogZ9nDZv1VE&content_type=book'
  // const [descrip, setDescrip] = useState([])
  // const getDescrip = async() =>{
  //   const response = await fetch(apiKey)
  //   const data = await response.json()
  //   const fixData = data.items.map( (book, index) => {
  //         return {
  //           title: book.fields.title,
  //           author: book.fields.author,
  //           description : book.fields.description,                     
  //           genre: book.fields.genre,
  //           ranking: book.fields.ranking,
  //           //cover:  data.includes.Asset[index].fields.file.url
  //           cover: data.includes.Asset.filter((img) => {
  //             let id = img.sys.id
              
  //             return id === book.fields.image.sys.id
  //           })[0].fields.file.url
  
  //        } })
  //         console.log(fixData)
  //         setDescrip(fixData)
  //         }
  //   // const description = (book) = {
  //   //   setDescrip([...descrip, (book)])
  //   // }
  //   const description = (book) =>{
  //     setDescrip([...descrip, (book)])
  //   }
    
        
        return(
          <div className ='main'>
            <Carousel2 trend = {props.books} />
            <Genres trend={props.books} /> 
            <Trending trend={props.books}/>
           
            {/* <Trending trend = {descrip} handleClick = {description} getDescrip ={getDescrip}/> */}
            <Kids trend={props.books}/>
            <Upcoming trend={props.books}/>
            <Form />
            </div>
        )
}
export default Home