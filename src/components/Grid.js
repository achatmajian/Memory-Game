import React from "react";
import Card from "./Card.js";


function Grid(props) {
    return (
        <div class="cards">
            {props.pickle.map((tomato) => 
            (<Card lettuce={tomato.url} spinach={tomato.name}/>))}
        </div>
    );
}

export default Grid;