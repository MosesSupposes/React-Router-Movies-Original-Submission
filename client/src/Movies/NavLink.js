import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({removeFromSavedList, movie}) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <span 
                className="saved-movie"
                onDoubleClick={removeFromSavedList.bind(null, movie)}
            >
                {movie.title}
            </span>
        </Link>
    )
}