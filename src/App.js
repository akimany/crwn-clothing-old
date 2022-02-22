import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignUpSignIn from './pages/signup-signin/signup-signin.component.jsx';
import Header from './components/header/header.component';

// styles
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignUpSignIn} />
      </Switch>
    </div>
  );
}

export default App;
