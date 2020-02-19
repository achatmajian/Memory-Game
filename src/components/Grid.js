import React from "react";
import Card from "./Card.js";


function Grid(props) {
    return (
        <div class="cards">
            {props.images.map(img => (<Card src={images.url}/>))}
        </div>
    );
}

export default Grid;