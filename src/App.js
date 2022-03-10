import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUpSignIn from './pages/signup-signin/signup-signin.component.jsx';
import Header from './components/header/header.component';

// firebase
import { onSnapshot, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, makeUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

// styles
import './App.css';

class App extends Component {
  // for subscription:
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // the parameter is what the user on the auth is
    //Adds an observer for changes to the user's sign-in state.
    // so close on unmount
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      // if user is signed in - not null
      if (userAuth) {
        //makeUserProfileDocument returns userRef object - we are using to see if our DB has updated with any new data. The const being called userRef, is like a reminder that makeUserProfileDocument returns userRef (which is a doc):
        const userRef = await makeUserProfileDocument(userAuth);
        const unsub = onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        // like setting it to null
        setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpSignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

// this destructures user reducer
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
