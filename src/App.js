import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Slider from "./components/Slider";
import CartContext from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartContext>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Slider />
            <ItemListContainer />
          </Route>
          <Route exact component={ItemDetailContainer} path="/item/:id" />
          <Route path="/categoria/:nombre">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartContext>
    </Router>
  );
}

export default App;
