import React from 'react'
import { NavLink as RRNavLink  } from 'react-router-dom'

export default function NavLink({removeFromSavedList, movie}) {
    return (
        <RRNavLink to={`/movies/${movie.id}`}>
            <span 
                className="saved-movie"
                onDoubleClick={removeFromSavedList.bind(null, movie)}
            >
                {movie.title}
            </span>
        </RRNavLink>
    )
}