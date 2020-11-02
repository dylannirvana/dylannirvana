import React from 'react';
import Container from 'react-bootstrap/Container'
import Iframe from 'react-iframe'

class Gofundme extends React.Component {
    render() {
        return (
                <Container className="section">
                    <h1>Get an <span style={{color: "red"}} >unreleased</span> Dylan Nirvana track!</h1>
                    <p>
                    Do you Love Rock? Get an unreleased Dylan Nirvana track! Help us record these new songs and I will give you a track before it is released on Spotify and Apple Music! We are recording my new songs: 
                    </p>
                    <h5>This is the Greatest Day of My Life</h5>
                    <h5>Are You a Materialist?</h5>
                    {/* <h5>Missing (remastered)</h5>
                    <h5>Dont Let This Be Their Last Christmas (co-written with Gary West from the Chemtrails)</h5> */}
                    <br />
                    <Iframe src="https://www.gofundme.com/f/new-recordings-with-platinum-producer/widget/large/"
        width="450px"
        height="520px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
                    
                </Container>

               
        )
    }
}

export default Gofundme;