
import React from 'react';
import Container from 'react-bootstrap/Container'
import DownloadPDF from '../assets/dylannirvana.pdf'
import OnesheetJPG from '../assets/dylannirvana.jpg'


class Onesheet extends React.Component {
    render() {
        return (
                <Container className="section">
                    
                    <div>
                        <h6>Music and TV/Film Industries</h6>
                        <p>Download a onesheet on Dylan Nirvana</p>
                        <a target="_blank" rel="noopener noreferrer" href={DownloadPDF}><img src={OnesheetJPG} style={{
                            width: '25%'
                        }} /></a>

                        
                    </div>

                </Container>
               

               
        )
    }
}

export default Onesheet;






 