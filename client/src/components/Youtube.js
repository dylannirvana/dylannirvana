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
                    // style={{ paddingTop: "56.25%" }}
                    className='react-player'
                    url='https://youtu.be/KTGvsaxMUZI'
                    width='100vw'
                    height='100vh'
                    overflow='hidden'
                    controls={false}
                    autoplay={true}
                    />
                </div>
                
            </div>
        )
    }
}

export default Youtube;
 