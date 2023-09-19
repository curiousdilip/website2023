import React from 'react'
import { timeline } from '../data/timeline'

const TimeLine = () => {
    return (
        <div>
            <ul>

                {timeline.map((item, index) => (
                    <li key={index}>
                        <h5 className='Day'> {item.day}</h5>
                        <p>{item.description} <a href="/">{
                            item.projectName}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TimeLine
