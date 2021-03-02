import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import CardsFooter from './components/home/CardsFooter.js';
import CarList from './CarList';
import CarEdit from './CarEdit';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Catalog from './views/catalog/Catalog';
import Product from './views/catalog/Product';
import Cart from './views/cart/cart';
import Order from './views/order/order';
import Notification from './views/notification/notification';
import Profile from './views/profile/profile';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    
    return (
      <div>
          <Router>
            <div>
              <AppNavbar/>
              <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Container fluid>
                <Route path='/cars' exact={true} component={CarList}/>
                <Route path='/cars/:id' component={CarEdit}/>
                <Route path='/sign-in' exact={true} component={Login}/>
                <Route path='/sign-up' exact={true} component={SignUp}/>
                <Route path='/catalog' exact={true} component={Catalog}/>
                <Route path='/catalog/:id' component={Product}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/orders' component={Order}/>
                <Route path='/notifications' component={Notification}/>
                <Route path='/profile-page' component={Profile}/>
                </Container>
              </Switch>
              {(window.location.pathname !== '/sign-in' )? ( (window.location.pathname === '/sign-up' )?  null:<CardsFooter /> ) : null  }
              
            </div>
          </Router>
        </div>
    )
  }
}

export default App;