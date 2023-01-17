import React, { useState, useEffect } from 'react'
import Stars from "./stars";
import { motion } from "framer-motion"

export default function Movie({category, name, score, changeRating, id}) {
    const [small, setsmall] = useState(false)
    const [thumbText, setThumbText] = useState("AB")
    useEffect(() => {

        let arr = name.trim().split(/[^A-Za-z0-9]+/)
        let i = 0
        let text = ""
        while(i<3 && arr[i]){
            text+=arr[i][0]
            i++
        }
       
        setThumbText(text)
    
        
    }, [])
    useEffect(()=>{
        if (thumbText.length>2) {
            setsmall(true)
        }
    }, [thumbText])
    return (
        <li
         className = "movie">
            <div className={"thumb" + (small? " small":"")}>
                {thumbText}
            </div>
            <div className="movie-content">
            <h3 className="movie-title">{name}</h3>
            <div className="category small">{category}</div>
            </div>
            <Stars id = {id} changeRating={changeRating} score = {score}/>
        </li>
    )
}
