import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  // Link, 
  NavLink,
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar';

import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

// Fix routing and styles =====

// DONE: Remove styling from App.js and add to index.js
// DONE: Add Bootstrap styles
// DONE: Add Bootstrap Navbar to router in index.js
// DONE: Make pages look presentable to show routes
// TODO: Review server-side routes
// TODO: Fix Form on contact.js so it works

// DEBUG: Push and create Pull Request

// NOTE: I want to be able to show distinct pages so routing is obvious. POST request needs to work. Some demo of server routing. Enough Bootstrap styling to make things presentable. 

const routing = (
  <Router>
    <div>   
      <Nav className="justify-content-center" >
        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            Home
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/users">
            Users
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/contact">
            Contact
          </NavLink>         
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Users} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
