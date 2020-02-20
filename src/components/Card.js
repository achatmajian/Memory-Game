import React from "react";

function Card(props) {
    return (
        <div class="card">
        <h1>{props.spinach}</h1>
        <img src={props.lettuce}/>
        </div>
    );
}

export default Card;