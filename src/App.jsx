
import Movies from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useQuery } from "./hooks/useQuery"




function App() {

  
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies } = useMovies({ query })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }



  return (
    <div className="app">
      <h1 className='title-aspelis'>Buscador de peliculas</h1>
      <header>
        <form className="container-search" onSubmit={handleSubmit}>
          <input 
            name='input' 
            type='search'
            value={query} 
            onChange={handleChange} 
            placeholder='Avatar, Matrix, Maze Runner..' 
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}}
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <p className="title-aspelis" style={{ color: 'red' }}>{error}</p>
      <main className="results">
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
