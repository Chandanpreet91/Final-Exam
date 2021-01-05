import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import NewAuctionForm from './components/NewAuctionForm'
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import { Session } from './requests';
import './styles/App.css';
import SignUpPage from './components/SignUpPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocksCount: [1],
      user: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  componentDidMount() {
    Session.currentUser()
      .then(user => {
        console.log(user);
        this.setState((state) => {
          return {
            user: user
          }
        })
      })
  }

  handleSubmit(params) {
    console.log(this);
    Session.create(params)
    .then(() => {
      return Session.currentUser()
    })
    .then(user => {
      console.log('user: ', user);
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  destroySession() {
    Session.destroy()
      .then(res => {
        this.setState((state) => {
          return {
            user: null
          }
        })
      })
  }

  render() {
    return (
      <div>
        { <BrowserRouter>
          
          <Navbar currentUser={this.state.user} destroySession={this.destroySession}/> 
          <Switch>
            <Route exact path='/' component={WelcomePage}/>
            <Route exact path='/auctions'>
              <AuctionIndexPage />
            </Route>
            <AuthRoute exact
              path='/auctions/new'
              isAllowed={this.state.user}
              component={NewAuctionForm} 
            /> 
            
            <Route exact path='/auctions/:id' component={AuctionShowPage}>
            </Route>
             <Route exact path='/sign_in'  render={(routeProps) => <SignInPage handleSubmit={this.handleSubmit} {...routeProps}/>}/>
            <Route exact path='/sign_up'><SignUpPage /></Route>

          </Switch>
        </BrowserRouter> }
      </div>
    )
  }
}

export default App;