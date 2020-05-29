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
                <h2>Our Clients</h2>
                <p>Server is handling GET requests. Select from menu below. Or type in arbitrary number in address bar (after /).</p>
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