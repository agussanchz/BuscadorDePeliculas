import React from 'react'

function ListOfMovies ({ movies }){
    return (
        <ul className='results-ul'>
            {
                movies.map((movie) => (
                    <li key={movie.id} className='results-li'>
                        <h3>{movie.title}</h3>
                        <img src={movie.img} alt={movie.title} />
                        <p>{movie.year}</p>
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
            { hasMovies ? <ListOfMovies movies={movies} /> : (<p>No se encontraron resultados para esta busqueda </p>) }
        </>
    )
}
