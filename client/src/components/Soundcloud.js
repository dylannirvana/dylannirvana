import React, { Component } from 'react';
import ReactPlayer from 'react-player/lazy'

// Resource: https://cookpete.com/react-player/ 

class Soundcloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundcloud: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="section">
                 {/* SOUNDCLOUD */}
                 <h3>Soundcloud</h3>
                 <p>Lorem ipsum dolor sit amet, usu falli audire impedit id. Alia quaestio delicatissimi mea at, consequat ullamcorper mea et, in eum porro ludus quodsi. Oratio lucilius ad eos, eros consequuntur ea ius, per legere offendit interpretaris ne. Pro et tempor evertitur, vis accusam suscipit invenire at. Mei ei apeirian accusata accusamus. Ea affert voluptua convenire sea, quando platonem vim no.</p>

                <div className='player-wrapper-soundcloud'>
                    <ReactPlayer
                    className='react-player'
                    url='https://soundcloud.com/dj-regard-1/ride-it'
                    width='100%'
                    height='auto'
                    />
                    <br />
                    <br />
                    <br />
                </div>    
                
            </div>
        )
    }
}

export default Soundcloud;
 