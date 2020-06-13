import React, { Component } from 'react';
import ReactPlayer from 'react-player'


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
                 <p>Soundcloud</p>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://soundcloud.com/dj-regard-1/ride-it'
                    width='100%'
                    height='100%'
                    />
                </div>    
                
            </div>
        )
    }
}

export default Soundcloud;
 