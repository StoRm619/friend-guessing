import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Counter from "./components/counter";
import friends from "./friends.json";

class App extends Component {
 // Setting this.state.friends to the friends json array
 state = {
  friends,
  //count for current round score
  count: 0,
  //current highest score
  high: 0
};

handleIncrement = (cardId) => {
  //Loop through characters array
  
  this.state.friends.find((friend, id) => {
    //Find id of image clicked 
    if (friend.id === cardId) {
      //If it has not been clicked: set chosen true, count+1, shuffle
      if (friends[id].chosen === false) {
        this.setState({ count: this.state.count + 1 });
        friends[id].chosen = true;
        this.moveFriends(friends);
        return true;
      }
      //If it has been clicked: new game
      else {
        this.newGame();
      }
    }
  });
};

moveFriends = array => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
newGame = () => {
  // check if their score is highest than current saved high score
  if (this.state.high < this.state.count) {
    this.setState({ high: this.state.count })
  }
  // set all heroes.clicked = false
  this.state.friends.forEach(friend => friend.chosen = false)
  // set count back to 0 
  this.setState({ count: 0 });
  return true;
}

// Map over this.state.friends and render a FriendCard component for each friend object
render() {
  return (
    <div className="App">
      <Counter count={this.state.count} high={this.state.high}/>
      {this.state.friends.map(friends => (
        <FriendCard  
          image={friends.image}
          key={friends.id}
          id={friends.id}
          handleIncrement={this.handleIncrement}
        />
      ))}
    </div>
  );
}
}

export default App;
