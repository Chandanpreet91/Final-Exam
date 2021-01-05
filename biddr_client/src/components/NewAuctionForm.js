import React from 'react';
import { Auction } from '../requests';
import { useHistory } from 'react-router-dom';

const NewAuctionForm = (props) => {
    const history = useHistory();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      title: formData.get('title'),
      body: formData.get('body'),
      ends_at: formData.get('ends_at'),
      price: formData.get('price')
    };
    Auction.create(params);

    event.currentTarget.reset();
    history.push('/auctions')   
  }

  return(
      <main class='container'>
          <h2>Create an Auction</h2>
    <form className='auction-form' onSubmit={ handleSubmit }>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input name='title' id='title' />
      </div>
      <div>
        <label htmlFor='body'>Description</label>
        <br />
        <textarea name='body' is='body' cols='60' rows='5'/>
      </div>
      <div>
        <label htmlFor='ends_at'>Ends At</label>
        <br />
        <input name='ends_at' id='ends_at' />
      </div>
      <div>
        <label htmlFor='price'>Reserve Price</label>
        <br />
        <input name='price' id='price' />
      </div>
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
    </main>
  );
};

export default NewAuctionForm;