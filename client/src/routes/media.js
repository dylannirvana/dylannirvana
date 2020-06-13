import React from 'react';
import News from '../components/News';
import Twitter from '../components/Twitter'
import Instagram from '../components/Instagram'
import Container from 'react-bootstrap/Container'

// NOTE: media.js takes the place of both artist and client rosters (which are galleries) until they get enough (artists and clients) to show. (Until then, artists.js and clients.js should not be accessible, but can be ready to go!) 
// NOTE: media.js aggregates VDO, audio, twitter, publicity. This provides the WHY should I do the CTA (which is what contact them? Do online form?) This is API not UX
// TODO: API axios.js 
// TODO: News not rendering on server


class Media extends React.Component {
    render() {
        return (
            <Container className="section">
                <h2>Media</h2> 
                
                <News />
                <Twitter />
                <Instagram />
                
            </Container>
        )
    }
}

export default Media;

