

const apiKey='https://cdn.contentful.com/spaces/lqgw03zjuy3r/environments/master/entries?access_token=IxLPmtOyDSuJ7FVVftr9sAg5Qf0RdJcxogZ9nDZv1VE&content_type=book'
const [books, setBooks] = useState({})
const pickBook = async() =>{
  const response = await fetch(apiKey)
  const data = await response.json()
  const fixData = data.items.map( (book, index) => {
        return {
          title: book.fields.title,
          author: book.fields.author,
          description : book.fields.description,
          ranking: book.fields.ranking,
          cover:  data.includes.Asset[index].fields.file.url

        } })
        console.log(fixData)
        setBooks(fixData)
        }

   useEffect(() => {
          fixData()
      }, [])