import React from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const NewSingle = ({item}) => (
    // <Card>
    //     <Card.Link  href={item.url}>
    //         <Card.Body>{item.title}</Card.Body>
    //     </Card.Link>
    // </Card>

    <Card style={{ width: '100%' }}>
     <Row >
        {/* <Card.Img variant="top" src={item.urlToImage} /> */}
        <Col xs={3} >
            <Card.Img style={{ maxWidth:"140px" }} variant="top" src={item.image} />
        </Col>
        <Col>
        {/* <Card.Body> */}
            <Card.Link href={item.url} target='_blank' >
                <Card.Title>{item.title}</Card.Title>
            </Card.Link>
        {/* </Card.Body> */}
        </Col>
            <Card.Text>
                {item.description}
            </Card.Text>
     </Row>
    </Card>

   
);

export default NewSingle;
 