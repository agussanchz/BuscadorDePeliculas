import React from 'react'

function ListOfMovies({ movies }) {
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
    const text = movies === undefined ? 'No se econtraron resultados para esta busqueda' : ''
    return (
        <>
            {hasMovies ? <ListOfMovies movies={movies} /> : (<p>{text}</p>)}
        </>
    )
}
