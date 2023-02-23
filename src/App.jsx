import { useState } from "react"
import Movies from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import { useQuery } from "./hooks/useQuery"


function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setQuery(newSearch)
    getMovies({ search: newSearch})
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
            name='input'
            type='search'
            value={query}
            onChange={handleChange}
            placeholder='Avatar, Matrix, Maze Runner..'
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }}
          />
          <button type='submit'>Buscar</button>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
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
