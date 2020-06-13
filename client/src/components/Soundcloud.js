import React, { Component } from 'react';
import ReactPlayer from 'react-player/lazy'

// Resource: https://cookpete.com/react-player/ 

class Soundcloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundcloud: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                 {/* SOUNDCLOUD */}
                 <h3>Soundcloud</h3>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://soundcloud.com/dj-regard-1/ride-it'
                    width='100%'
                    height='auto'
                    />
                    <br />
                </div>    
                
            </div>
        )
    }
}

export default Soundcloud;
 