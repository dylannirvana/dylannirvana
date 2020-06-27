import React from 'react';
import gsap from 'gsap'
// import Container from 'react-bootstrap/Container'
import { 
} from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {
    componentDidMount() {
        gsap.from(".thing", {duration: 1, delay: 1.5, opacity: 0, y: 150})

    }

    render() {
        return (
                
                <footer sticky="bottom" className="footer mt-auto py-3">
                    {/* <Navbar> */}
                    {/* <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                    </div> */}

                     <Nav className="justify-content-center footer" >
                       
                        <Nav.Item className="thing" >
                        <p className="tinytype">Copyright 2020</p>
                        </Nav.Item>

                    </Nav>

                    {/* </Navbar> */}
                   
                </footer>
         

        )
    }
}

export default Footer;