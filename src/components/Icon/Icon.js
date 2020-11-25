import React from 'react'
import './Icon.css'

import Cloudy from '../../assets/cloudy.svg'
import Rain from '../../assets/rain.svg'
import Snowing from '../../assets/snowing.svg'
import Sun from '../../assets/sun.svg'
import Thermometer from '../../assets/thermometer.svg'

const Icon = (props)=> {
    switch(props.icon) {
        case 801 :
            return <img className = "icon" src = {Cloudy} alt = {Cloudy}/>
            break;
        case 802 :
            return <img className = "icon" src = {Cloudy} alt = {Cloudy}/>
            break;
        case 803 :
            return <img className = "icon" src = {Cloudy} alt = {Cloudy}/>
            break;
        case 200 :
            return <img className = "icon" src = {Rain} alt = {Rain}/>
            break;
        case 201 :
            return <img className = "icon" src = {Rain} alt = {Rain}/>
            break;
        case 202 :
            return <img className = "icon" src = {Rain} alt = {Rain}/>
            break;
        case 600 :
            return <img className = "icon" src = {Snowing} alt = {Snowing}/>
            break;
        case 601 :
            return <img className = "icon" src = {Snowing} alt = {Snowing}/>
            break;
        case 602 :
            return <img className = "icon" src = {Snowing} alt = {Snowing}/>
            break;
        case 610 :
            return <img className = "icon" src = {Snowing} alt = {Snowing}/>
            break;
        default :
            return (
                <React.Fragment>
                    <img className = "icon" src = {Thermometer} alt = {Thermometer}/>
                    <h5>{props.description}</h5>
                </React.Fragment>
            )
    }
}

export default Icon;
