
import './App.css';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from "react-router";
///componets
import Header from './Pages/header'
import Trending from './Componets/Trending'
import Kids from './Componets/Kids'
import Upcoming from './Componets/Upcoming'
import Footer from './Componets/footer'
import Home from './Pages/Home'
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
            cover: data.includes.Asset.filter((img) => {
              let id = img.sys.id
              return id === book.fields.image.sys.id
            })[0].fields.file.url  
         } })          
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
         <Route path='/Upcoming' render={ (props) => <Upcoming trend={books} />} /> 
         <Route path='/Trending' render={ (props) => <Trending trend={books} />} />
         <Route path='/Kids' render={ (props) => <Kids trend={books} />} />
       </Switch>
     </main>: <div>Loading</div>}  
     <Footer />
     </div>
  );
}
export default App;
