import React from 'react';
import { Jumbotron} from 'reactstrap';

const Counter = (props) => {
    return (
        <Jumbotron className="jumbotron">
            <h1 className="display-3 jumbotronTitle">Clicky Game - Friends</h1>
            <p className="lead jumbotronDescription">Click on an image to earn points</p>
            <hr className="my-2" />
            <p className="highDisplay">High score: {props.high}</p>
            <p className="countDisplay">Current score: {props.count}</p>
        </Jumbotron>
    );
};
export default Counter;