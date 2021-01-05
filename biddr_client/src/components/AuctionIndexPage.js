import React, { Component } from 'react'
import NewAuctionForm from './NewAuctionForm'
import { Auction } from '../requests';
export class AuctionIndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      auctions: []
    }

     this.createAuction = this.createAuction.bind(this)
  }
  componentDidMount() {
    Auction.index()
      .then((auctions) => {
        this.setState((state) => {
          return {
          auctions: auctions
          }
        })
      })
  }
  createAuction(params){
    this.setState((state) => {
      return {
        auctions: [
          {
            id: (Math.max(...state.auctions.map(q => q.id)) + 1), // get the largest id out of all the question ids then added 1 to it
            ...params
          },
          ...state.auctions
        ]
      }
    })
  }

    render() {
            return (
                <main class='container'>
                  <h1>Auctions</h1>
                  <ul style={{ padding: 0, listStyle: 'none'}}>
                    {
                      this.state.auctions.map(auction => {
                        return(
                          <li key={auction.id}>
                            <a href='#'>{auction.title}</a>
                            <p>posted on {auction.ends_at}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </main>
              );
            }
    }

export default AuctionIndexPage;
