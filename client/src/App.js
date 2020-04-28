import React, { Component } from 'react';
import logo from './tonelogo.svg';
import './App.css';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };

  
  
render() {
    return (
      <div className="App">
        <header className="App-header">

           {/* React-Bootstrap */}
           <Navbar variant="light" bg="light" expand="sm">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">React-routed Home</Nav.Link>
                <Nav.Link href="/users">React-routed Users</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;