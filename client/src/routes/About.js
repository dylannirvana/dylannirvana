import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class About extends React.Component {
    render() {
        return (
            <Container className="section">
                <h2>Versatile Tone Group</h2>
                <Row style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                    <Col>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    </Col>
                    <Col>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    </Col>
                    <Col>
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                    </Col>
                   
                </Row>
                
                

                <p>TONE is a creative, safe haven for artists looking to take their career to the next level. Co-founded in 2020 by Daniel Kontoh-Boateng, Kwame Twum-Barima, and Evangelos Mines, the vision of the group is channeling energy, creative vision, and striving to cultivate family-like relationships with our clients that empowers the full spectrum of their creativity and unique artist brands without any alteration influenced by "demands" of the entertainment world. We proudly say, SET YOUR TONE, and we’ll do the WORK.</p>      
               
            </Container>
        )
    }
}

export default About;