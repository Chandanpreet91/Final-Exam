
import React from 'react';

const AuctionDetails = (props) => {
 
   const title = props.title;
   const description = props.description;
   const current_price = props.current_price;
   const ends_at = props.ends_at;
  // const created_at = props.created_at;
  // const updated_at = props.updated_at;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{current_price}</p>
    </div>
  );
};

export default AuctionDetails;