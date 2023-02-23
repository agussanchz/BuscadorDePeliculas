const API_KEY = '674c1306'

export const searchMovies = async ({ query }) => {

  if (query === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      img: movie.Poster,
      year: movie.Year
    }))
  } catch (error) {
    throw new Error('Error al buscar la pelicula')
  }
}

