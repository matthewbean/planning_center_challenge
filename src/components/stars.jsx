import React from 'react'
import goldStar from "../assets/goldStar.svg"
import greyStar from "../assets/greyStar.svg"
export default function Stars({score, changeRating, id}) {
    const createStars=()=>{
        let arr = new Array(5)
        for (let i = 1; i <= 5; i++) {
            arr[i-1]=i<=score
        }
        return arr
    }

    return (
        <>
            <div className="stars-container">
                {createStars().map((item, i)=>(
                    <button aria-label={i+1 +" star"+(i === 0?"":"s")} key={i} onClick={(e)=>changeRating(e, i+1, id)} className='invisible'>
                    {item?<img width="16px" height="16px" className="star" src={goldStar} alt="" />:<img width="16px" height="16px"  className="star" src={greyStar} alt="" />}
                    </button>
                ))}
                </div>
        </>
    )
}
