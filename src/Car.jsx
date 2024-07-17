import React from 'react';
import './App.css';

function Car(props){
    return(
        <div className="car">
            <h3>{props.index + 1}. </h3>
            <h3>{props.brand}</h3>
            <h3>{props.model}</h3>
            <h3>{props.year}</h3>
        </div>
    )
}

export default Car;