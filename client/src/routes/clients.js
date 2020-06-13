import React from 'react';
// import { 
//     // Route, 
//     Link 
// } from 'react-router-dom';
// import Video from '../components/Video';
// import Tracks from '../components/Tracks';
// import Stats from '../components/Stats';
// import Twitter from '../components/Twitter'
import Youtube from '../components/Youtube'
import Soundcloud from '../components/Soundcloud'
// import Instagram from '../components/Instagram'
// import Contact from '../routes/contact'
import Container from 'react-bootstrap/Container'
// import ReactPlayer from 'react-player'

// NOTE: divide API up between client.js and media.js 
// TODO: bio lorem, full container vdo, 


class Clients extends React.Component {
    render() {
        // const { params } = this.props.match;
        return (
            <div >
                
                {/* Full width VDO First */}
                <Youtube />

                <Container className="section">
                    <h2>Jay Z</h2>
                    {/* Short Bio */}
                    <p>Lorem ipsum dolor sit amet, usu falli audire impedit id. Alia quaestio delicatissimi mea at, consequat ullamcorper mea et, in eum porro ludus quodsi. Oratio lucilius ad eos, eros consequuntur ea ius, per legere offendit interpretaris ne. Pro et tempor evertitur, vis accusam suscipit invenire at. Mei ei apeirian accusata accusamus. Ea affert voluptua convenire sea, quando platonem vim no.</p>

                    <Soundcloud />
                    {/* <Contact /> */}

                    {/* <Twitter />
                    <Instagram /> */}
                    
                </Container>
               

                <br />
                <br />
                <br />
                <br />
                <br />
                

               
                
                
                {/* <p>User id: {params.id}</p>                
                <ul>
                    <li>
                        <Link to="/clients/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/clients/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/clients/3">User 3 </Link>
                    </li>
                </ul> */}
                {/* <Route path="/users/:id" component={User} /> */}
                
                {/* <Video /> */}
                {/* <Tracks /> */}
                {/* <Stats /> */}

            </div>
        )
    }
}

export default Clients;