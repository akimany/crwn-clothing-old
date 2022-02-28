import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUpSignIn from './pages/signup-signin/signup-signin.component.jsx';
import Header from './components/header/header.component';

// firebase
import { onSnapshot, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, makeUserProfileDocument } from './firebase/firebase.utils';

// styles
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  // for subscription:
  unsubscribeFromAuth = null;

  componentDidMount() {
    // the parameter is what the user on the auth is
    //Adds an observer for changes to the user's sign-in state.
    // so close on unmount
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      this.setState({ currentUser: userAuth });
      if (userAuth) {
        //console.log(userAuth);
        // if user is signed in
        //makeUserProfileDocument returns a doc or object(?) - we are using to see if our DB has updated with any new data. The const being called userRef, is like a reminder that makeUserProfileDocument returns userRef (which is a doc):
        //const userRef = await makeUserProfileDocument(userAuth);
        //onSnapshot(doc(db, 'users', userAuth.uid), (snapshot) => {});
      }
    });
  }
  // close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignUpSignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
