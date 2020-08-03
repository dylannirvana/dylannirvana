import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Embed from 'react-music-embed'

// Resource: https://cookpete.com/react-player/ 

class AppleMusic extends Component {
   

    componentDidMount() {

    }

    render() {
        return (
            <div className="section">
                 {/* <h3>Automatic</h3>
                 <p>From the record Anne Boleyn by Dylan Nirvana</p> */}

                <div className='player-wrapper-applemusic'>
                    <h1>Hullo</h1>
                    <Embed url="https://music.apple.com/us/album/automatic/267819202?i=267819209" />

                    
                    
                    
                     {/* <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style={{width:100%;max-width:660px;overflow:hidden;background:transparent}} allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation src="https://embed.music.apple.com/us/album/automatic/267819202?i=267819209"></iframe> */}
                </div> 
                   
               <Container>
                    
               </Container>
              
            </div>
        )
    }
}

export default AppleMusic;
 