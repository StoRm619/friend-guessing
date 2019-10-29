import React from 'react';
import "./style.css";

function FriendCard(props) {
    return (
        <div className="card">
            <img className="cardImage" style={{width: 300, height: 300}} src={props.image} alt="Card Pic" onClick={() => props.handleIncrement(props.id)}></img>
        </div>
    )
}

export default FriendCard;