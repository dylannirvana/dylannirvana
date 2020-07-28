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
                        {/* <NavItem><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/v.tonegroup/"><i className="fab fa-instagram fa-2x"></i></a></NavItem> */}
                        <Nav.Item><p className="tinytype">Copyright 2020</p></Nav.Item>
                        {/* <NavItem><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SetThe_Tone"><i className="fab fa-twitter fa-2x"></i></a></NavItem> */}

                    </Nav>

                    {/* </Navbar> */}
                   
                </footer>
         

        )
    }
}

export default Footer;