import React from 'react';
import { 
    // Route, 
    Link 
} from 'react-router-dom';

// NOTE: artists.js and client.js may refactor as the same parameterized component. 


class Clients extends React.Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h1>Page is Clients</h1>
                <p>User id: {params.id}</p>
                <ul>
                    <li>
                        <Link to="/clients/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/clients/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/clients/3">User 3 </Link>
                    </li>
                </ul>
                {/* <Route path="/users/:id" component={User} /> */}
            </div>
        )
    }
}

export default Clients;