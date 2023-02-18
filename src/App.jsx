import Movies from "./components/Movies"
import responseMovies from './mocks/movies.json'

function App() {

  const movies = responseMovies.Search

  return (
    <div className="app">
      <h1 className='title-aspelis'>Buscador de peliculas</h1>
      <header>
        <form className="container-search">
          <input type='search' placeholder='Avatar, Matrix, Maze Runner..' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main className="results">
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
