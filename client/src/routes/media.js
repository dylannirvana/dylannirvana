import React from 'react';
import News from '../components/News'

// NOTE: media.js takes the place of both artist and client rosters (which are galleries) until they get enough (artists and clients) to show. (Until then, artists.js and clients.js should not be accessible, but can be ready to go!) 
// NOTE: media.js aggregates VDO, audio, twitter, publicity. This provides the WHY should I do the CTA (which is what contact them? Do online form?) This is API not UX
// TODO: API axios.js 
// TODO: UI bootstrap


class Media extends React.Component {
    render() {
        return (
            <div>
                <h2>Post actual news articles about:</h2> 
                <ol>
                    <li>Your Artists</li>
                    <li>Industry pros that you are working with</li>
                    <li>VTG in the news</li>
                </ol>
                <p>Example responsive layout courtesy of Twitter Bootstrap</p>
                <br /><h4>Placeholder is top news stories</h4>
                
                <News />
                
            </div>
        )
    }
}

export default Media;

