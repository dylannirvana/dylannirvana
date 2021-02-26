
import React from 'react';
import Container from 'react-bootstrap/Container'
import nametag from '../assets/dylannirvana_nametag.png'

class Nametag extends React.Component {
    render() {
        return (
            <div >
                <Container className="section">
                    <div>
                        <br />
                        <h6>Instragram/DylanNirvana</h6>
                        <img src={nametag}></img>
                    </div>
                    
                    <br />
                    <br />
                </Container>
                <br />
                <br />
               </div>

               
        )
    }
}

export default Nametag;






 