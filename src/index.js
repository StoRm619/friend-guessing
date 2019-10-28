import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));



//Basic idea for code 
// have each friend have it its own counter
//if friend counter at any point is more than 2 then good over and reset eveything
// use following code to increase counter
//   // handleIncrement increases this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };
// move friend card around after each pic.