
import React from 'react';
import Container from 'react-bootstrap/Container'
import DownloadPDF from '../assets/dylannirvana.pdf'
import OnesheetJPG from '../assets/dylannirvana.jpg'


class Onesheet extends React.Component {
    render() {
        return (
                <Container className="section">
                    <h5>Press, Music and TV/Film Industries</h5>

                    <h6><i class="far fa-hand-point-right"></i> <span style={{color: "#f3cd31"}}> <a target="_blank" rel="noopener noreferrer" href="https://dylannirvana.disco.ac/lib/3929"> Dylan Nirvana</a></span> on Disco  searchable library of music. </h6>

                    <p className='tinytype'>Easy clearance on publishing and masters</p>

                    <h6><i class="far fa-hand-point-right"></i><span style={{color: "#f3cd31"}}> <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/dylannirvana"> Dylan Nirvana</a></span> on SoundCloud </h6>
<br />
                    <p><i class="far fa-hand-point-right"></i> Download a onesheet on Dylan Nirvana</p>
                    <a target="_blank" rel="noopener noreferrer" href={DownloadPDF}><img alt="Download a One-sheet"  src={OnesheetJPG} style={{
                        width: '25%'
                    }} /></a>

                </Container>
               

               
        )
    }
}

export default Onesheet;






 