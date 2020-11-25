import React from 'react'
import './Temp.css'

const Temp = (props) => {
    return <div className = "Temp">
        <span className = "min">{props.minTemp}&#176;</span>
        <span className = "max">{props.maxTemp}&#176;</span>
    </div>
}

export default Temp;
