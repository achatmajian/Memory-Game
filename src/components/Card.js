import React from "react";

function Card(props) {
    return (
        <div class="card">
        <h1>{props.src}</h1>
        <img src={props.src}/>
        </div>
    );
}

export default Card;