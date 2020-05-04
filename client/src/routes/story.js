import React from 'react';
import { 
    // Route, 
    Link 
} from 'react-router-dom';

// const User = ({ match }) => <p>{match.params.id}</p>;

class Story extends React.Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h1>Page is Story</h1>
                <p>User id: {params.id}</p>
                <ul>
                    <li>
                        <Link to="/story/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/story/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/story/3">User 3 </Link>
                    </li>
                </ul>
                {/* <Route path="/users/:id" component={User} /> */}
            </div>
        )
    }
}

export default Story;