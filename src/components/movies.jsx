import React, { useContext, useEffect } from 'react'
import { motion } from "framer-motion"
import AppContext from "../context/appContext"
import Movie from './movie.jsx'
export default function Movies(props) {
const appContext = useContext(AppContext) 
const { movies, changeRating, loadMovies } = appContext;

useEffect(() => {
    loadMovies(JSON.parse(localStorage.getItem("movies")))
}, [])
    return (
        <ul>
            {movies&&movies.map((item)=>(
                <Movie key={item.id} changeRating={changeRating} id={item.id} score={item.score} category={item.category} name={item.name}/>
            ))}
        </ul>
    )
}
