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
                <h1>Login</h1>
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