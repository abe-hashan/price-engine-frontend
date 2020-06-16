import React from 'react';
import {Router, Switch, Route, Link} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './App.css';
import ListComponent from './modules/List/ListComponent';
import CartComponent from './modules/Cart/CartComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavbarText, Navbar } from 'reactstrap';


const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Navbar color="light" light expand="md">
        
        
          <Nav className="mr-auto" navbar>
            <NavItem>
               <Link to="/">Price List</Link>
            </NavItem>
            <NavItem>
              <Link to="/cart">Cart</Link>
            </NavItem>
            
          </Nav>
          <NavbarText>Price Engine</NavbarText>
       
      </Navbar>
        <Switch>
          <Route path="/" exact component={ListComponent}/>
          <Route path="/cart" component={CartComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
