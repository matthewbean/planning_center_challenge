import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimationControls } from "framer-motion"


import goldStar from "../assets/goldStar.svg"
import greyStar from "../assets/greyStar.svg"
export default function Stars({score, changeRating, id}) {
      const controls = useAnimationControls()
      const [stars, setstars] = useState(null)
      //keep track of which render we are on to control animation
      const firstUpdate = useRef(0)
    //function that creates a list of stars to map through later
    const createStars=()=>{
        let arr = new Array(5)
        for (let i = 1; i <= 5; i++) {
            arr[i-1]=i<=score
        }
         setstars(arr)
    }
    //create list of stars to render
    useEffect(()=>{
        createStars()
    }, [score])
    //animate stars
    useEffect(() => {
        //dont run animation on first renders
        if (firstUpdate.current<2) {
            firstUpdate.current++;
            
          }else{
      
        controls.start({
            scale: [1, 1.5, 1],
            transition: { duration: .3 },
        })
    }

    }, [stars])
    //


    return (
        <>
            <div className="stars-container"  aria-level="1" aria-label={"rate movie, current rating "+score}>
            <span >
                {stars&&stars.map((item, i)=>(
                    <button aria-label={i+1 +" of 5 stars"} key={i} onClick={(e)=>changeRating(e, i+1, id)} className='invisible'>
                    {item?(
                    <motion.img initial={false} animate={controls}
                    transition={{ duration: 0.5 }} width="32px" height="32px" className="star" src={goldStar} alt="" />):
                    (<img width="32px" height="32px"  className="greyStar star" src={greyStar} alt="" />)}
                    </button>
                ))}
                </span>
                </div>
        </>
    )
}
