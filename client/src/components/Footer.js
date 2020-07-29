import React from 'react';
import gsap from 'gsap'
// import Container from 'react-bootstrap/Container'
import { 
} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavItem from 'react-bootstrap/NavItem';

class Footer extends React.Component {
    componentDidMount() {
        gsap.from(".footer", {duration: 1, delay: 1.5, opacity: 0, y: 150})

    }

    render() {
        return (
                
                <footer sticky="bottom" className="footer mt-auto py-3">
                    {/* <Navbar> */}
                    {/* <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                    </div> */}

                     <Nav className="justify-content-center footer" >
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TheBadFlowers/"><i className="fab fa-facebook fa-2x"></i></a></Nav.Item>
                        <Nav.Item><p className="tinytype">Copyright 2020</p></Nav.Item>
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/dylannirvana/kt-88-1"><i className="fab fa-twitter fa-2x"></i></a></Nav.Item>

                    </Nav>

                    {/* </Navbar> */}
                   
                </footer>
         

        )
    }
}

export default Footer;

 