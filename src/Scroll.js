import React from "react";

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'Scroll', border: '1px solid black', height:}}>
            {props.children}
        </div>
    )
};

export default Scroll;