import React, { Component } from 'react';
import ReactPlayer from 'react-player'

// Reference article: https://coderrocketfuel.com/article/embed-a-youtube-video-in-a-react-webpage
// TODO: Make the VDO fill the container

class Youtube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtube: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {/* REACT PLAYER */}
                {/* <p>Sample Youtube VDO</p> */}
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
                </div>
                
            </div>
        )
    }
}

export default Youtube;
 