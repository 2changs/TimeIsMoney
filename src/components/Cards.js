import React, {Component} from "react";
import Swipeable from "react-swipy"
import './Cards.css';
 
import Card from "./Card.js";
 
class Cards extends Component {
  state = {
    cards: ["First", "Second", "Third"],
  };
 
  remove = () =>
    this.setState(({cards}) => ({
      cards: cards.slice(1, cards.length),
    }));
 
  render() {
    const {cards} = this.state;
 
    return (
      <div className="Wrapper">
        <div className="Cards">
          {cards.length > 0 ? (
            <div className="Cards">
              <Swipeable
                onAfterSwipe={this.remove}>
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          ) : (
            <Card zIndex={-2}>No more cards</Card>
          )}
        </div>
      </div>
    );
  }
}
 
export default Cards;