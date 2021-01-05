import React from 'react';
import BidDetails from './BidDetails';

const BidList = (props) => {
  console.log(props);
  const bids = props.bids;
  return(
    <ul>
      {
        bids ?
        bids.map(bid => {
          return (
            <li key={bid.id}>
              <BidDetails
                id={bid.id}
                body={bid.body}
              />
            </li>
          )
        })
        :
        null
      }
    </ul>
  )
}

export default BidList;