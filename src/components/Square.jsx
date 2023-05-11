import React from "react";

const Square = (props) => {
    return (
        <div
        onClick={props.onClick}
            style={{
                border: "2px solid blue", 
                height: "100px", 
                width: "50%", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            className="square">
            <h3>{props.value}</h3>
        </div>
    )
}

export default Square;