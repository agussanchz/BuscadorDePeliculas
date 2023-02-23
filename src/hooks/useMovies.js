import { searchMovies } from '../services/movies'
import { useState } from 'react'

//custom hook
export function useMovies({ query }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)  
    } catch (error) {
      throw new Error('Error al cargar las peliculas')
    } finally{
      setLoading(false)
    }
    
  }
  return { movies, getMovies, loading}
}