import React from 'react';
// import { 
//     // Route, 
//     Link 
// } from 'react-router-dom';
// import Video from '../components/Video';
import Tracks from '../components/Tracks';
// import Stats from '../components/Stats';
import Container from 'react-bootstrap/Container'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import ReactPlayer from 'react-player'

// NOTE: artists.js and client.js may refactor as the same parameterized component. 


class Clients extends React.Component {
    render() {
        // const { params } = this.props.match;
        return (
            <Container className="section">
                <h2>Artist Name</h2>
                <p>Sample Twitter timeline</p>

                {/* REACT TWITTER EMBED */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{height: 400}}
                />

                {/* REACT PLAYER */}
                <p>Sample Youtube VDO</p>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    />
                </div>
                
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
                <Tracks />
                {/* <Stats /> */}

            </Container>
        )
    }
}

export default Clients;