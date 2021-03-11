
import React from 'react';
import Container from 'react-bootstrap/Container'
import DownloadPDF from '../assets/dylannirvana.pdf'
import OnesheetJPG from '../assets/dylannirvana.jpg'
// import Contact from '../routes/contact';


class Onesheet extends React.Component {
    render() {
        return (
     
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1 className="prettybigname">Dylan Nirvana</h1>

            <Container className="section">

                <h3><span style={{color: "#f3cd31"}}>"Pure New York City Punk Rock"</span> - London B-Max Festival. A witty and vainglorious full heave of the cutlery. A guitarist's revenge on the status quo. <span style={{color: "#f3cd31"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice <span style={{color: "#f3cd31"}}>“A harder early Bowie”</span> - Country Music Awards</h3>

                <br />
                <br />

                <h5>Press, Music and TV/Film Industries</h5>
                <p className='tinytype'>Easy clearance on publishing and masters</p>
                
                <iframe id="disco-playlist-6421710" name="disco-playlist-6421710" allowfullscreen frameborder="0" class="disco-embed" src="https://dylannirvana.disco.ac/e/p/6421710?download=true&s=VLFPatXpegQwGMBXM-0BUeY-BUs%3AytBSLCpO&artwork=true&theme=dark&color=%2332B57C" width="355" height="395"></iframe>

                <br />
                <br />

                <p><i class="far fa-hand-point-right"></i>  <span style={{color: "#f3cd31"}}> <a target="_blank" rel="noopener noreferrer" href="https://s.disco.ac/suvxzcntmvxz"> Press Kit</a></span> </p>

                
                <p><i class="far fa-hand-point-right"></i> Fully searchable library of music by <span style={{color: "#f3cd31"}}><a target="_blank" rel="noopener noreferrer" href="https://dylannirvana.disco.ac/lib/3929"> Dylan Nirvana</a></span> on Disco </p>


                <p><i class="far fa-hand-point-right"></i>  <span style={{color: "#f3cd31"}}> <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/dylannirvana"> Dylan Nirvana</a></span> on SoundCloud </p>                    

                <p className="email" ><i class="far fa-hand-point-right"></i> Haul off and email <a href="mailto:management@dylannirvana.com">management@dylannirvana.com</a></p>

                <p><i class="far fa-hand-point-right"></i> Download a onesheet on Dylan Nirvana</p>
                <a target="_blank" rel="noopener noreferrer" href={DownloadPDF}><img alt="Download a One-sheet" src={OnesheetJPG} style={{
                    width: '25%'
                }} /></a>
                <br />
                <br />
                <br />
                <br />
            </Container>
        </div>

        )
    }
}

export default Onesheet;






 