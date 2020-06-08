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
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

// import Container from 'react-bootstrap/Container'
// import './index.css';
import './custom.scss'; // Works! Compiled by WebPack????
import App from './App';
// import logo from './tone150.png';
import Media from './routes/media';
import Artists from './routes/artists';
import Clients from './routes/clients';
import Contact from './routes/contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>   
      <Nav className="justify-content-center" >
        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            Tone Artist Development 
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/artists">
            Artists
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/clients">
            Clients
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/media">
            Media
          </NavLink>         
        </Nav.Item>

      <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/contact">
            Contact
          </NavLink>         
        </Nav.Item>
      </Nav>

      {/* <Container> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/artists/:id" component={Artists} />
        <Route path="/artists" component={Artists} />
        <Route path="/clients/:id" component={Clients} />
        <Route path="/clients" component={Clients} />
        <Route path="/media" component={Media} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 
      {/* </Container> */}

      {/* BOOTSTRAP */}
      {/* FOOTER */}
      {/* <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    
    {/* FOOTER NAV */}
      {/* <Nav className="justify-content-center" >
        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            Tone 
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/artists">
            Artists
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/clients">
            Clients
          </NavLink>         
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/media">
            Media
          </NavLink>         
        </Nav.Item>

      <Nav.Item>
          <NavLink className="nav-link" exact activeClassName="active" to="/contact">
            Contact
          </NavLink>         
        </Nav.Item>
      </Nav> */}
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

