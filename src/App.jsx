import { useCallback, useState } from "react"
import { useMovies } from "./hooks/useMovies"
import { useQuery } from "./hooks/useQuery"
import Movies from "./components/Movies"
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const debounceGetMovies = useCallback(
    debounce((query) => {
      getMovies({ query })
    }, 300)
  , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setQuery(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="app">
      <h1 className='title-aspelis'>Buscador de peliculas</h1>
      <header>
        <form className="container-search" onSubmit={handleSubmit}>
          <input
            className='input'
            name='input'
            type='search'
            value={query}
            onChange={handleChange}
            placeholder='Avatar, Matrix, Maze Runner..'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <button type='submit'>Buscar</button>
          <input type='checkbox' onChange={handleSort} checked={sort} />
        </form>
      </header>
      <p className="paraffo-aspelis" style={{ color: 'red' }}>{error}</p>
      <main className="results">
        {loading ? <p>Cargando ... </p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
