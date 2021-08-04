import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from "react-router";
///componets
import Footer from './Componets/footer'
import Header from './Pages/header'
import Trending from './Componets/Trending'
import Kids from './Componets/Kids'
import Upcoming from './Componets/Upcoming'

// pages
//import Main from './Pages/Main'
// import Books from './Componets/Genres'
import Home from './Pages/Home'
import Form from './Pages/Forms'
import Books from './Pages/Books'

function App() {
  const apiKey='https://cdn.contentful.com/spaces/lqgw03zjuy3r/environments/master/entries?access_token=IxLPmtOyDSuJ7FVVftr9sAg5Qf0RdJcxogZ9nDZv1VE&content_type=book'
  const [books, setBooks] = useState([])
  const pickBook = async() =>{
    const response = await fetch(apiKey)
    const data = await response.json()
    const fixData = data.items.map( (book, index) => {
          return {
            title: book.fields.title,
            author: book.fields.author,
            description : book.fields.description,
            ranking: book.fields.ranking,
            released: book.fields.released,
            genre: book.fields.genre,
            //cover:  data.includes.Asset[index].fields.file.url
            cover: data.includes.Asset.filter((img) => {
              let id = img.sys.id
              
              return id == book.fields.image.sys.id
            })[0].fields.file.url
  
         } })
          console.log(fixData)
          setBooks(fixData)
          }
    useEffect (() => {
      pickBook()
        }, [])
  return (
        <div className="App">
     <Header/>
     {books.length > 0 ?   <main>
       <Switch>
         <Route  exact path='/'>
            <Home books = {books}/>
         </Route>
         <Route   path='/books'>
            <Books books = {books}/>
         </Route>
         <Route>
            <Trending  exact path = '/Trending' trend ={books}/>
         </Route>
             
       </Switch>
     </main>: <div>Loading</div>}  
     <Form />
      <Footer/>
    </div>
  );
}

export default App;
