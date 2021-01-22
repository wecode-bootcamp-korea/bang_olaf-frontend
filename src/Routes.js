import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CommonNavbar from "./Components/Navbar/CommonNavbar";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <CommonNavbar />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product_list" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
