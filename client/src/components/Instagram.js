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
                <p>Lorem ipsum dolor sit amet, usu falli audire impedit id. Alia quaestio delicatissimi mea at, consequat ullamcorper mea et, in eum porro ludus quodsi. Oratio lucilius ad eos, eros consequuntur ea ius, per legere offendit interpretaris ne. Pro et tempor evertitur, vis accusam suscipit invenire at. Mei ei apeirian accusata accusamus. Ea affert voluptua convenire sea, quando platonem vim no.</p>
                <InstagramEmbed
                    url='https://instagr.am/p/Zw9o4/'
                    maxWidth={320}
                    // maxWidth='auto'
                    hideCaption={true}
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
 