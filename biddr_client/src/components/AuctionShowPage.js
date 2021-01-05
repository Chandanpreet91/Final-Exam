import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auction: {},
      value: {}
    }
     console.log(props.match.params.id);
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const fd= new FormData(event.currentTarget);
    const params = {
      body: fd.get('body')
    }
    console.log(params);
  }
 

  render() {
    return (
      <main className='container'>
        {<AuctionDetails
          title={ this.state.auction.title }
          description={this.state.auction.description}
          current_price={this.state.auction.current_price}
        /> }
        <form onSubmit={this.handleSubmit} >
        <label>
          Bid:
          <input type="text" name="body" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <h3>Previous Bids:</h3>
        
        <div className ="bids">
        <BidList bids={this.state.auction.bids} />
        </div>
      </main>
    )
  }
}
export default AuctionShowPage
