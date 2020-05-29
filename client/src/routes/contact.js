import React from 'react';

// NOTE: contact.js handles server-side POST requests. This might be the CTA: Contact directly.
// TODO: Round trip the POST request

class Contact extends React.Component {

    onSubmit = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h2>Let us help you find what you are looking for</h2>
              
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
                <p>Server is handling POST requests</p>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;