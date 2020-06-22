import React, { Component } from 'react';
import video from '../logoDrawOn.mp4'
// import video from '../glitch.mp4'
// import video from '../holding.mp4'


class CoverVDO extends Component {
    render() {
        return (
            <header className="App-header">
              <video src={video} autoPlay muted loop style={{
                type: 'video/mp4',
                objectFit: 'cover',
                overflow: 'hidden',
                width: '100vw',
                height: '100vh',
                }} />
  
          </header>
        )
    }
}

export default CoverVDO;