import React from 'react';

// NOTE: Internal admin page listing both artists and clients. Not public-facing. 
// TODO: API MongoDB 

class Users extends React.Component {

    onSubmit = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h2>Users</h2>
                <ol>
                    <li>Authentication, db, admin access to users</li>
                </ol>
                <p>This is an internal page where admin can access all users. Artists and clients.</p>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Users;