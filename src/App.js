import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import Contact from './pages/contact/contact';

import ButtonCounter from './components/HOC/button-counter';
import HoverCounter from './components/HOC/hover-counter';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user-actions'; 
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends Component {
  /* constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  } */

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          /* this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }) */
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      //this.setState({ currentUser: userAuth });
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' render={() => this.props.currentUser  
          ? ( <Redirect to='/'/> )
          : ( <SignInAndSignUpPage /> )}
          />
          {
          //<Route exact path='/signin' component={SignInAndSignUpPage} />
          }
        </Switch>
      </div>
    );
  }
} 

/* const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
}) */

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
