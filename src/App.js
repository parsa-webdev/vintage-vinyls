import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import Menu from './components/Menu'
import ItemDetails from './components/ItemDetails'

import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App({ cart }) {
  return <>
    <Router>
      <Navbar cart={cart.length < 1 ? null : cart.length} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/menu/:id" component={ItemDetails} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  </>
}

const mapStateToProps = (state) => {
  return {
    cart: state.MenuReducer.cart
  }
}

export default connect(mapStateToProps)(App)