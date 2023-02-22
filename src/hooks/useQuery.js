import { useEffect, useState, useRef } from "react"

export function useQuery() {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const firstInput = useRef(true)

    useEffect(() => {

        if (firstInput.current) {
            firstInput.current = query === ''
            return
        }

        if (query === '') {
            setError('No se puede buscar una pelicula vacia')
            return
        }

        if (query.match(/^\d+$/)) {
            setError('No se puede buscar una pelicula con numeros')
            return
        }
        
        if (query.length < 3) {
            setError('La busqueda debe tener al menos 3 caracteres')
            return
        }


        setError(null)

    }, [query])

    return { query, setQuery, error, setError, firstInput }
}
