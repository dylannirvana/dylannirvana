import React from 'react';
// import { 
//     // Route, 
//     Link 
// } from 'react-router-dom';
// import Video from '../components/Video';
// import Tracks from '../components/Tracks';
// import Stats from '../components/Stats';
// import Twitter from '../components/Twitter'
import Youtube from '../components/Youtube'
import Soundcloud from '../components/Soundcloud'
// import Instagram from '../components/Instagram'
// import Contact from '../routes/contact'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import ReactPlayer from 'react-player'

// NOTE: divide API up between client.js and media.js 
// TODO: bio lorem, full container vdo, 


class Clients extends React.Component {
    render() {
        // const { params } = this.props.match;
        return (
            <div >
                {/* Full width VDO  */}
                <Youtube />

                <Container className="section">
                    {/* Tease: beginning above the fold */}
                    <h2>Chase Alex</h2>
                    {/* Short Bio */}
                    <p>Take a look in to the mind of Chase Alex, as he faces moral dilemmas in situations his gritty charm can’t get him out of. New York roots with fluid Chicago influence fuels his creativity-in-music as an art. Chase’s artistic production does not call for categories, he says “Immerse yourself into my work”.  One thing you won’t find as a surprise is his zest for auto-crooning over futuristic pop melodies with trap inspired percussion, Chase hopes to use his music to tell stories of hopeless romance while dealing with his fear of growing up all while wearing designer jeans. </p>

                    {/* // TODO: I need the real links here */}
                    <Row>
                        <Col><a href="https://apple.com"><i className="fab fa-instagram fa-2x"></i></a></Col>
                        <Col><a href="https://apple.com"><i className="fab fa-youtube fa-2x"></i></a></Col>
                        <Col><a href="https://apple.com"><i className="fab fa-twitter fa-2x"></i></a></Col>
                    </Row>

                    

                    <Soundcloud />
                    <br />
                    <br />
                    <br />
                </Container>
               

                <br />
                <br />
                <br />
                <br />
                <br />
                

               
                
                
                {/* <p>User id: {params.id}</p>                
                <ul>
                    <li>
                        <Link to="/clients/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/clients/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/clients/3">User 3 </Link>
                    </li>
                </ul> */}
                {/* <Route path="/users/:id" component={User} /> */}
                
                {/* <Video /> */}
                {/* <Tracks /> */}
                {/* <Stats /> */}

            </div>
        )
    }
}

export default Clients;