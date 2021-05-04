
import React from 'react';
import Container from 'react-bootstrap/Container'
// import onesheet from '../assets/dylannirvana.pdf'
import {Helmet} from 'react-helmet' // remove this if you dont use it

class MailingList extends React.Component {
    render() {
        return (
            <div >
                <Container className="section">
                <div>
                    <h3>Be the first to know...</h3>
                    {/* <div className="widget_iframe" style={{display:"inline-block", width:"100%", height:"184px", margin:0, padding:0, border:0}}>
                        <iframe title="mailing list" className="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_27466?widget_id=54&amp;posted_by=artist_27466&pwc[design]=default&pwc[background_color]=%23140d78&pwc[size]=fit"  frameborder="0" scrolling="no" style={{ minWidth:"100%", width:"100%", height:"100%"}}></iframe>
                        <div className="footer_branding" style={{display:"none"}}></div>
                    </div> */}

                    <Helmet>
                        <script async data-uid="e9274113f5" src="https://astounding-creator-7935.ck.page/e9274113f5/index.js"></script>
                    
                    </Helmet>

                    </div>

                    <div>
                        <br />
                        {/* <h6>Music Industry</h6>
                        <p>Download a <a target="_blank" rel="noopener noreferrer" href={onesheet}>one-sheet</a> on Dylan Nirvana.</p> */}
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

export default MailingList;






 