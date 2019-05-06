import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({movie: { id, title}}) {
    return (
        <Link to={`/movies/${id}`}>
            <span className="saved-movie">{title}</span>
        </Link>
    )
}