import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'


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
            <div>
                {/* INSTAGRAM */}
                <p>Instagram</p>
                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    maxWidth={320}
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
 