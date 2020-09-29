import React from 'react';
import Container from 'react-bootstrap/Container'
import Iframe from 'react-iframe'

class Gofundme extends React.Component {
    render() {
        return (
                <Container className="section">
                    <h1>Ive gotta get to Cleveland</h1>
                    <p>
                    Help me record a Hit Single! Crazy luck strikes again! I have another opportunity to record with Platinum Producer Jim Wirt (Fiona Apple, Incubus) at Superior Sound with Tragic Hero Records in Cleveland, home of Pere Ubu and the Rock n' Roll Hall of Fame. 
                    </p>
                    <p>
                    We will be recording my new song, This is the Greatest Day of My Life, and other songs that I haven't even finished writing yet! Ack!

                    </p>
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