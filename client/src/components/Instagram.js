import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'
// Resource: https://www.npmjs.com/package/react-instagram-embed

class Instagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instagram: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="instagram">
                {/* INSTAGRAM */}
                <h3>Instagram</h3>
                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    // maxWidth={320}
                    maxWidth='auto'
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                />

               
            </div>
        )
    }
}

export default Instagram;
 