import { searchMovies } from '../services/movies'
import { useState } from 'react'

//custom hook
export function useMovies({ query }) {

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await searchMovies({ query })
    setMovies(newMovies)
  }
  return { movies, getMovies }
}