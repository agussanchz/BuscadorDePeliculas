import { useState } from 'react'


//custom hook
export function useMovies({ query }) {

  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    img: movie.Poster,
    year: movie.Year
  }))

  const getMovies = () => {
    console.log(query)
    if (query) {
      fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=674c1306&s=${query}`)
      .then((res) => res.json())
      .then((json) => {
        setResponseMovies(json)
      })
    }
  }
  return { movies: mappedMovies, getMovies }
}