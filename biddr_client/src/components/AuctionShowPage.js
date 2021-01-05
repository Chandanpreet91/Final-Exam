import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';

export class AuctionShowPage extends Component {
  // `this` refers to an instance of QuestionShowPage
  // to access props given to QuestionShowPage we use `this.props`
  constructor(props) {
    // constructor recieves the props object
    // if we want to use `this` within the constructor we must super(props).
    // basically you super(props) in every class component
    super(props);

    this.state = {
      auction: {}
    }
     console.log(props.match.params.id);
    // this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    Auction.show(this.props.match.params.id)
      .then(auction => {
        console.log(auction);
        this.setState((state) => {
          return {
            auction: auction
          }
        })
      })
  }
  render() {
    return (
      <main class='container'>
        {<AuctionDetails
          title={ this.state.auction.title }
          description={this.state.auction.description}
          current_price={this.state.auction.current_price}
        /> }
        <form>
        <input id='price' type='price' name='price' />
        <input type='submit' value='Bid'></input>
        </form>
        <h3>Previous Bids:</h3>
        {/* { AnswerDetails({body: 'blue', author: { full_name: 'bugs bunny'}, created_at: new Date()})} */}
        {/* Because AnswerDetails is just a function that returns a React Element you can render it out with the above syntax as well but this would be considered bad practice. */}
        <BidList bids={this.state.auction.bids} />
      </main>
    )
  }
}
export default AuctionShowPage
