import { searchMovies } from '../services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

//custom hook
export function useMovies({ query, sort }) {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(query)


  const getMovies = useCallback(async ({ query }) => {
    if (query === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Error al cargar las peliculas')
    } finally {
      setLoading(false)
    }
  },[])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])


  return { movies: sortedMovies, getMovies, loading }
}