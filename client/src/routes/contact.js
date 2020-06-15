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
                <h2>Contact Tone</h2>
                <p>Lorem ipsum dolor sit amet, usu falli audire impedit id. Alia quaestio delicatissimi mea at, consequat ullamcorper mea et, in eum porro ludus quodsi. Oratio lucilius ad eos, eros consequuntur ea ius, per legere offendit interpretaris ne. Pro et tempor evertitur, vis accusam suscipit invenire at. Mei ei apeirian accusata accusamus. Ea affert voluptua convenire sea, quando platonem vim no.</p>

                {/* MAILTO */}
                <h3><a href="mailto:someone@example.com?subject=Yes">Send your email</a></h3>
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