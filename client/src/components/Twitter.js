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
                <p>Lorem ipsum dolor sit amet, usu falli audire impedit id. Alia quaestio delicatissimi mea at, consequat ullamcorper mea et, in eum porro ludus quodsi. Oratio lucilius ad eos, eros consequuntur ea ius, per legere offendit interpretaris ne. Pro et tempor evertitur, vis accusam suscipit invenire at. Mei ei apeirian accusata accusamus. Ea affert voluptua convenire sea, quando platonem vim no.</p>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ width: 400, height: 400 }}
                />
            </div>
        )
    }
}

export default Twitter;
 