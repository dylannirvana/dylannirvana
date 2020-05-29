import React from 'react';
// import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const NewSingle = ({item}) => (
    // <Card>
    //     <Card.Link  href={item.url}>
    //         <Card.Body>{item.title}</Card.Body>
    //     </Card.Link>
    // </Card>

    <Col sm={6} md={4} lg={3}>
         <Card >
        <Card.Img variant="top" src={item.urlToImage} />
        <Card.Body>
            <Card.Link href={item.url} target='_blank' >
                <Card.Title>{item.title}</Card.Title>
            </Card.Link>
            <Card.Text>
                {item.description}
            </Card.Text>
        </Card.Body>
    </Card>

    </Col>
   
);

export default NewSingle;
 