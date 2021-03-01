import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

// NOTE: contact.js handles server-side POST requests. This might be the CTA: Contact directly.
// TODO: Round trip the POST request

class Contact extends React.Component {

    // onSubmit = () => {
    //     this.props.history.push('/')
    // }
    render() {
        return (
            <Container className="section">

                {/* <h5>Look at a <span style={{color: "red"}}> <a href="https://dylannirvana.disco.ac/lib/3929">Searchable catalog of music.</a> </span> by Dylan Nirvana</h5> */}

                
                <h6>Contact Icarian Records</h6>
                {/* <p>Label or Publishing A&R, press and other inquiries</p> */}
                {/* MAILTO */}
                <h6 className="email" ><i class="far fa-hand-point-right"></i> <a href="mailto:management@dylannirvana.com">management@dylannirvana.com</a></h6>
                    {/* <Form>
                    <Form.Label>Name</Form.Label>
                        <Form.Row>
                            
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="What's your email?" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="How can we help you?" rows="3"/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                

                {/* Add space */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
            </Container>

        )
    }
}

export default Contact;