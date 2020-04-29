import React from 'react';
import { 
    // Route, 
    Link 
} from 'react-router-dom';

// const User = ({ match }) => <p>{match.params.id}</p>;

class Client extends React.Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h1>Page is Client</h1>
                <p>User id: {params.id}</p>
                <ul>
                    <li>
                        <Link to="/client/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/client/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/client/3">User 3 </Link>
                    </li>
                </ul>
                {/* <Route path="/users/:id" component={User} /> */}
            </div>
        )
    }
}

export default Client;