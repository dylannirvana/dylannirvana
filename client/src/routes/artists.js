import React from 'react';
import { 
    // Route, 
    Link 
} from 'react-router-dom';

// NOTE: artists.js and clients.js are handling parameterized GET requests. 
// FIXME: Bootstrap gallery of Artists || Clients? Problem is, they do not yet have a roster. What do I present instead? By using media.js instead 
// TODO: UI bootstrap gallery
// TODO: API use parameterized GET request to go to profile.js (artist, client)

class Artists extends React.Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h2>Artist Roster</h2>
                <p>Server is handling GET requests. Select from menu below. Or type in arbitrary number in address bar (after /).</p>
                <p>User id: {params.id}</p>
                <ul>
                    <li>
                        <Link to="/artists/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/artists/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/artists/3">User 3 </Link>
                    </li>
                </ul>
                {/* <Route path="/users/:id" component={User} /> */}
            </div>
        )
    }
}

export default Artists;