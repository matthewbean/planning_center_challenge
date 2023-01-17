import React from 'react'
import Movies from './movies.jsx'
import NewRating from './newRating.jsx'
export default function Card(props) {
    

    return (
        <>
        <div className="card">
            <h1 className="title">Screen it</h1>
            <NewRating/>
            <Movies/>
        </div>
        </>
    )
}

