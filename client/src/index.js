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
// import './index.css';
import './custom.scss'; // Works! Compiled by WebPack????
import App from './App';
import Story from './routes/story';
import Media from './routes/media';
import Profile from './routes/profile';
import Roster from './routes/roster';
import Clients from './routes/clients';
import Contact from './routes/contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

// Routing =====
// DONE: Move route files to routes directory. Update path index.js
// DONE: Sitemap Flowmapp
// DONE: touch new placeholders and route them: STORY, ARTISTS, CLIENT
// TODO: Scrolling https://www.npmjs.com/package/react-router-scroll || react docs. 
// TODO: New navigation


// UI =====
// DONE: Remove styling from App.js and add to index.js
// DONE: Add Bootstrap styles
// DONE: client/src/custom.scss
// DONE: Add Bootstrap Navbar to router in index.js
// TODO: SASS stylesheets
// TODO: Navigation
// TODO: Layout


// API =====
// TODO: API for the Client page: easily choose, and sign an artist?
// TODO: Build POST request contact form contact.js 
// TODO: Instagram API
// TODO: Twitter 
// DONE: News 
// TODO: YouTube
// TODO: Spotify


const routing = (
  <Router>
    <div>   
      <Nav className="justify-content-center" >
        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            Work with Tone 
          </NavLink>         
        </Nav.Item>

        {/* <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/story">
            Work with Tone
          </NavLink>         
        </Nav.Item> */}

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/profile">
            Featured Artist
          </NavLink>         
        </Nav.Item>

        {/* <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/roster">
            Join our Artist Roster
          </NavLink>         
        </Nav.Item> */}

        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/clients">
            Who we work with
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/media">
            News and Social Media
          </NavLink>         
        </Nav.Item>

      <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/contact">
            Contact us
          </NavLink>         
        </Nav.Item>
      </Nav>

      <Container>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/story" component={Story} />
        <Route path="/profile" component={Profile} />
        <Route path="/roster/:id" component={Roster} />
        <Route path="/roster" component={Roster} />
        <Route path="/clients/:id" component={Clients} />
        <Route path="/clients" component={Clients} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
      </Container>
    
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
