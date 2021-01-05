import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  
  function handleSignOutButtonClick(){
    props.destroySession();
  }
    return ( 
        <nav>
      <NavLink to='/'>Home</NavLink>
      |
      <NavLink to='/auctions'>Auctions</NavLink>
      |
      <NavLink to='/auctions/new'>New</NavLink>
      |
      {
        props.currentUser ? (
         <>
        <span>{props.currentUser.first_name}</span>
        <button onClick = {handleSignOutButtonClick}>Sign Out</button>
         </>
        )
        :
        <span><NavLink to='/sign_in'>Sign In</NavLink></span>
      }
      |
      <span><NavLink to='/sign_up'>Sign Up</NavLink></span>
      </nav>
    )
}

export default Navbar
