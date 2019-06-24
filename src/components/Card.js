import React from 'react';

import './Card.css';

const Card = (props) => {
    const setColor = {
        flex: "0.5",
        padding: "0% 0%"
    };

    if (props.asset.status == 'a') {
        setColor.backgroundColor = "#38ada9";
    } else if (props.asset.status == 'b') {
        setColor.backgroundColor = "#2d98da";
    } else if (props.asset.status == 'i') {
        setColor.backgroundColor = "#fc5c65";
    } else {
        setColor.backgroundColor = "#fa8231";
    }

    return (
        <div className={`card ${props.card_size}`}>
            <div style={setColor}></div>
            <div className="card-body" style={cardStyle2}>
                <h3>{props.asset.id}</h3>
                <div style={{ marginTop: "1px", fontSize: "100%" }}>{props.asset.name}</div>
            </div>
        </div>
    )
}

const cardStyle2 = {
    flex: "2",
    paddingTop: "0px",
    paddingLeft: "5px",
    fontSize: "10px",
    color: "white"
}

export default Card;