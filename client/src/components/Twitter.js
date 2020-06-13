import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twitter: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {/* REACT TWITTER EMBED */}
                <h3>Twitter</h3>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{height: 400}}
                />
            </div>
        )
    }
}

export default Twitter;
 