import React from 'react'
import { timeline } from '../data/timeline'
import "./timeline.css"
const TimeLine = () => {
    return (
        <div>
            <ul className='timeline'>

                {timeline.map((item, index) => (
                    <li key={index} >
                        <h5 className='day'> {item.day}</h5>
                        <p>{item.description} <a href="/">{
                            item.projectName}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TimeLine
