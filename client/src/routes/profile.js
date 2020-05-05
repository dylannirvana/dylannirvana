import React from 'react';
import { 
} from 'react-router-dom';


// NOTE: profile.js is for FEATURED ARTIST or FEATURED CLIENT 
// TODO: parameterize profile.js from artists.js and clients.js. But can stand alone. 

class Profile extends React.Component {
    render() {

        return (
            <div>
                <h2>Featured Artist / Featured Client</h2>
                <ol>
                    <li>Conversion is action to sign (either by artist or industry professional</li>
                    <li>This page can be parameterized from artist roster and client roster</li>
                </ol>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
            </div>
        )
    }
}

export default Profile;