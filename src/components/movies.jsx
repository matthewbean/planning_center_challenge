import React, { useContext } from 'react'
import AppContext from "../context/appContext"
import Movie from './movie.jsx'
export default function Movies(props) {
const appContext = useContext(AppContext) 
const { movies, changeRating } = appContext;
    return (
        <>
            {movies&&movies.map((item)=>(
                <Movie key={item.id} changeRating={changeRating} id={item.id} score={item.score} category={item.category} name={item.name}/>
            ))}
        </>
    )
}
