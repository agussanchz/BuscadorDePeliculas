import responseMovies from '../mocks/movies.json'

//custom hook
export function useMovies() {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      img: movie.Poster,
      year: movie.Year
    }))
  
    return { movies: mappedMovies }
  }