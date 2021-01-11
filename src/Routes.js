import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Account from './Pages/Account/Account'
import Login from './Pages/Login/Login';
import ProductList from "./Pages/Product/ProductList";
import ProductDetail from './Pages/ProductDetail/ProductDetail';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/account' component={Account} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/product_list' component={ProductList} />
          <Route exact path='/product_detail' component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;