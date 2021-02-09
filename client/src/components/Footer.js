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
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dylannirvana/"><i className="fab fa-instagram fa-2x"></i></a></Nav.Item>
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/dylannirvana"><i className="fab fa-soundcloud fa-2x"></i></a></Nav.Item>
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DylanNirvana"><i className="fab fa-twitter fa-2x"></i></a></Nav.Item>
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TheBadFlowers/"><i className="fab fa-facebook fa-2x"></i></a></Nav.Item>
                        <Nav.Item><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/DylanNIrvanaNYC/"><i className="fab fa-youtube fa-2x"></i></a></Nav.Item>
                        <Nav.Item><p className="tinytype"> Copyright 2021</p></Nav.Item>
                    </Nav>
                    {/* </Navbar> */}
                   
                </footer>
         

        )
    }
}

export default Footer;

 