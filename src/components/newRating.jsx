import React, { useState, useContext } from 'react'
import AppContext from '../context/appContext'
import Stars from './stars'

export default function NewRating(props) {
    const appContext = useContext(AppContext)
    const { createRating } = appContext
    const [state, setstate] = useState({
        name:'',
        category:'',
        score:0
    })

    const handleChange = (e)=>{
        setstate({...state, [e.target.name]:e.target.value})
    }
    const changeRating=(e,value)=>{
        e.preventDefault()
        setstate({...state, score:value})
    }
const handleSubmit=(e)=>{
    e.preventDefault()
    if (state.name.length<=0 || !/[A-Za-z0-9]+/.test(state.name)){
        alert("Please enter a valid title")
        return
    }
    if (state.category.length<=0){
        alert("Please select a category") 
        return
    }
    if (state.score<=0){
        alert("Please select a rating") 
        return
    }
    createRating(state)
    setstate({
        name:'',
        category:'',
        score:0
    })
}
    return (
        <>
            <form className= "new-rating" onSubmit={handleSubmit} >
                <div className="row">
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} value={state.name} type="text" name="name" placeholder='Name of the movie' id="name" />
                </div>
                <div className="row">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" onChange={handleChange} className = {state.category.length>0? "black":""} value= {state.category}>
                    <option value="" disabled>Select your option</option>
                    <option value="Action/Adventure">Action/Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
                </div>
                <div className="row">
                <div className="label">Rating</div>
                <Stars score = {state.score} changeRating={changeRating}/>
                </div>
                <button className="submit">Add Movie</button>
            </form>
        </>
    )
}
