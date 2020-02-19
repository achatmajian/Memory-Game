import React from "react";
import Card from "./Card.js";


function Grid(props) {
    return (
        <div class="cards">
            {props.imgUrls.map(
                img => (<Card src={img.url}/>) 
            )}
        </div>
    );
}

export default Grid;