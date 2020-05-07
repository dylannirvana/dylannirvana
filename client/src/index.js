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
import Container from 'react-bootstrap/Container'
import './index.css';
import './custom.scss'; // Works! Compiled by WebPack????
import App from './App';
import Story from './routes/story';
import Media from './routes/media';
import Profile from './routes/profile';
import Login from './routes/login';
import Users from './routes/users';
import Artists from './routes/artists';
import Clients from './routes/clients';
import Contact from './routes/contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

// Routing =====
// DONE: Move route files to routes directory. Update path index.js
// DONE: Sitemap Flowmapp
// DONE: touch new placeholders and route them: STORY, ARTISTS, CLIENT
// NOTE: OPTIONAL Scrolling https://www.npmjs.com/package/react-router-scroll || see react docs. This is not as important as setting up the components themselves. Scrolling is a matter of how they are being displayed


// UI =====
// DONE: Remove styling from App.js and add to index.js
// DONE: Add Bootstrap styles
// DONE: client/src/custom.scss
// DONE: Add Bootstrap Navbar to router in index.js
// TODO: SASS stylesheets


// API =====
// TODO: API for the Client page: easily choose, and sign an artist?
// TODO: Build POST request contact form contact.js 
// NOTE: The preliminary CTA might be to get them to call


// DEBUG: Push and create Pull Request
// NOTE: I want to be able to show distinct pages so routing is obvious. POST request needs to work. Some demo of server routing. Enough Bootstrap styling to make things presentable. 

// TODO: Update nav

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
          <NavLink className="nav-link" activeClassName="active" to="/media">
            Media
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/profile">
            Featured Artist
          </NavLink>         
        </Nav.Item>

      {/* This is the CTA and somehow was to be emphasized */}
      <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/contact">
            Contact
          </NavLink>         
        </Nav.Item>
      </Nav>

      <Container>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/media" component={Media} />
        <Route path="/profile" component={Profile} />
        <Route path="/story" component={Story} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/artists/:id" component={Artists} />
        <Route path="/artists" component={Artists} />
        <Route path="/clients/:id" component={Clients} />
        <Route path="/clients" component={Clients} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
      </Container>

      <Nav className="justify-content-center" >
      <Nav.Item>
        <NavLink className="nav-link" exact activeClassName="active" to="/story">
          Story
        </NavLink>         
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" exact activeClassName="active" to="/artists">
          Artists
        </NavLink>         
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" exact activeClassName="active" to="/clients">
          Clients
        </NavLink>         
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" exact activeClassName="active" to="/login">
          Login
        </NavLink>         
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" exact activeClassName="active" to="/users">
          Users
        </NavLink>         
      </Nav.Item>

      </Nav>

    
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
