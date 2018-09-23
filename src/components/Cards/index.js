import React, {Component} from "react";
import Swipeable from "react-swipy"
import './Cards.css';
 
import TinderCard from "../TinderCard/";
 
class Cards extends Component {
  state = {
    cards: [
    { imageUrl: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
      title: "Card 1"
    }, 
    {imageUrl: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
      title: "Card 2"
    }, 
    {imageUrl: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
      title: "Card 3"
    }],
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
                <TinderCard imageUrl={cards[0].imageUrl} title={cards[0].title}> </TinderCard>
              </Swipeable>
              {cards.length > 1 && <TinderCard zIndex={-1}>{cards[1]}</TinderCard>}
            </div>
          ) : (
            <TinderCard zIndex={-2} title={"Refresh Cards"}></TinderCard>
          )}
        </div>
      </div>
    );
  }
}
 
export default Cards;