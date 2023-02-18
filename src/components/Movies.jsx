import React from 'react'

function ListOfMovies ({ movies }){
    return (
        <ul className='results-ul'>
            {
                movies.map((movie) => (
                    <li key={movie.imdbID} className='results-li'>
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster} alt={movie.Title} />
                        <p>{movie.Year}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        <>
            { hasMovies ? <ListOfMovies movies={movies} /> : (<p>No existen peliculas</p>) }
        </>
    )
}
