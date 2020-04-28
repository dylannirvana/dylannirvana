import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  // Link, 
  NavLink,
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Users} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
       {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>  */}
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      
    </div>
  </Router>
)

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
