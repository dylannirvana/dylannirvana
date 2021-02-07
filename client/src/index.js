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
import Navbar from 'react-bootstrap/Navbar'
import './custom.scss'; 
import App from './App';
import Footer from './components/Footer'
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';
import gsap from 'gsap'
import SignatureStory from './routes/SignatureStory';
// import Soundcloud from './components/Soundcloud';
import MailingList from './components/Mailinglist';



const routing = (
  <Router>
    <div>  
      <div className="navbar-container">
        <Navbar collapseOnSelect className="navbar-dark" expand="none" bg="dark">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >   
              <Nav.Item onClick={() => gsap.from(".circle1", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle1">
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                  Dylan Nirvana
                </NavLink>         
              </Nav.Item>
             
              <Nav.Item onClick={() => gsap.from(".circle2", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle2">
                <NavLink className="nav-link" activeClassName="active" to="/story">
                  Crazy Story
                </NavLink>         
              </Nav.Item>

              <Nav.Item onClick={() => gsap.from(".circle3", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle3">
                <a className="nav-link" activeClassName="active" href="https://soundcloud.com/dylannirvana/">
                  SoundCloud
                </a>         
              </Nav.Item>

              {/* <Nav.Item onClick={() => gsap.from(".circle4", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle4">
                <NavLink className="nav-link" activeClassName="active" to="/mailinglist">
                  Be on it
                </NavLink>         
              </Nav.Item> */}

            </Nav>
          </Navbar.Collapse>
          </Navbar>
      </div> 
    

     

      {/* <Container> */}
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/artists/:id" component={Artists} />
        <Route path="/artists" component={Artists} /> */}
        {/* <Route path="/clients/:id" component={Clients} /> */}
        {/* <Route path="/clients" component={Clients} />
        <Route path="/media" component={Media} /> */}
        <Route path="/story" component={SignatureStory} />
        {/* <Route path="/soundcloud" href="https://soundcloud.com/dylannirvana/this-is-the-greatest-day-of-my-life" /> */}
        <Route path="/mailinglist" component={MailingList} />
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

      <Footer />

      {/* <Nav className="justify-content-center footer" >
        <Nav.Item >
          <p className="tinytype">Copyright 2020</p>
        </Nav.Item> */}

        {/* <Nav.Item>
          <NavLink className="nav-link" activeClassName="active" to="/artists">
            Artists
          </NavLink>         
        </Nav.Item> */}
      {/* </Nav> */}

    </div>
  </Router>
// gsap.from(".circle", {duration: 1, delay: 1.5, opacity: 0, y: 150, stagger: 0.25});
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






