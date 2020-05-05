import React from 'react';

// NOTE: login.js may have a UI login page and handles authentication. However, WHY and TO WHAT am I logging in? UX issue.
// TODO: UI Bootstrap login
// TODO: Authentication

class Login extends React.Component {

    onSubmit = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <p>Both server and client-side can handle POST requests.</p>
                <ol>
                    <li>Authentication required</li>
                    <li>Accesses DB</li>
                    <li>Admin can view users</li>
                    <li>Artists and Clients can view their accounts</li>
                    <li>The account can be a todo list, allow favorites, a spreadsheet of signed contracts</li>
                    <li>Or more like a CRM</li>
                </ol>
                <p>The question is of course, would anyone use it? Better to incorporate useful tools than replace them. Focus of what is essential, on what they need but do not yet have.</p>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;