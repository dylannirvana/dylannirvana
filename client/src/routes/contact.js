import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

// NOTE: contact.js handles server-side POST requests. This might be the CTA: Contact directly.
// TODO: Round trip the POST request

class Contact extends React.Component {

    onSubmit = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <Container>
                <h2>Contact us</h2>
                <h5>This is the Call To Action. </h5>
                <p>"Let us help you find what you are looking for". We have to make this very easy, targeted and compelling. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
                {/* <p>Server is handling POST requests</p> */}
                {/* <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form> */}

                <Form>
                <Form.Label>Name</Form.Label>
                    <Form.Row>
                        {/* <Form.Group> */}
                        
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                        {/* </Form.Group> */}
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

                    {/* <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> */}

                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>

                {/* Add space */}
                <br />
                <br />
                
            </Container>
        )
    }
}

export default Contact;