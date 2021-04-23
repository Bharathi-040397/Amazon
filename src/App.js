import React from 'react';
import './App.css';
import Header from './Header.js';
import Navbar from './Navbar.js';
import New from './New';
import Home from './Home';
import Footer from './Footer';
import Prime from './Prime';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import SimpleFooter from './SimpleFooter';
import NewUser from './NewUser';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react'
import AnotherLogin from './AnotherLogin';
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Fashion from './Fashion';
import Mobile from './Mobile';
import Gift from './Gift'
import Orders from './Orders'

const promise = loadStripe(
    "pk_test_51HRIYkAP6Wg5pjiYiQoJp7RtvyeFA8A1Q1H9G10KqBZk39YhaDIVlSlZxKNX6IBLYPujXMsDKjaHm9h0LZfw12ZM00Dm0V6NoF");




function App() {
      //eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth
      .onAuthStateChanged(authUser => {
        if (authUser)
        {
          dispatch({
            type: 'SET_USER',
            user:authUser
          })
        }
        else
        {
          dispatch({
            type: 'SET_USER',
            user:null
          })
          }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Navbar />
            <Orders />
            <Footer />
          </Route>
          <Route path="/gift">
            <Header />
            <Navbar />
            <Gift />
            <Footer />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </Route> 
          <Route path="/mobile">
            <Header />
            <Navbar />
            <Mobile />
            <Footer />
          </Route>
          
          <Route path="/newuser">
            <NewUser />
            <SimpleFooter/>
          </Route>
        <Route path="/prime">
            <Header />
            <Navbar />
            <Prime />
            <Footer />
          </Route>
          <Route path="/fashion">
            <Header />
            <Navbar />
            <Fashion />
            <Footer />
          </Route>
        <Route path='/new'>
          <Header />
          <Navbar />
          <New />
          <Footer />
        </Route>
        <Route path="/login">
            <AnotherLogin />
            <SimpleFooter />
          </Route>
           <Route path="/">
          <Header />
          <Navbar />
          <Home/>
          <Footer />
          </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
