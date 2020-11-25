import React from 'react'
import './Loader.css'
import Spinner from '../../assets/spinner.gif'

const Loader = (props) => {
    return (
        <div className = "Loader">
            <img src = {Spinner} alt = {Spinner} />
            <h6 className = "text-center-mt-3">{props.msg}</h6>
        </div>
    );
};

export default Loader
