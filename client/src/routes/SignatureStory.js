import React from 'react';
import Container from 'react-bootstrap/Container'
import Facebook from './Facebook'

class SignatureStory extends React.Component {
    render() {
        return (
            <div >
                <Container className="section">
                    <h2>Dylan Nirvana</h2>
                    {/* Short Bio */}
                    <p>Classical guitarist turns to classic punk rock. Bach just wasn’t in the cards. After DJ’ing for the New York Dolls and Gogol Bordello, spinning life-changing vinyl like Raw Power, Velvet Underground’s “green banana”, Three Imaginary Boys and Marquee Moon, Dylan Nirvana became part of Manhattan’s underground music scene. 
 
 </p>

                    <h5 className="subhead" >“A harder early Bowie” - Country Music Awards</h5>

                    <p>Part of the Antifolk revolution in New York City’s East Village, Dylan Nirvana performed along side Living Colour’s Corey Glover, Chris Barron from the Spin Doctors, Blues Traveler’s John Popper, Regina Spektor, Feist, and Nelly McKay at classic venues like Sidewalk Cafe, Continental, CBGB’s, Pianos, Luna and Mercury Lounge.
</p>

                    <h5>“Like Elvis Costello. Morrissey meets Motörhead” - The Village Voice</h5>

                    <p>Working with producer Jim Wirt (Fiona Apple), Dylan Nirvana and The Bad Flowers has Billy Ficca from the legendary band Television (and the Waitresses) on drums. Dylan Nirvana on vocals and guitar. With Marshall amps and Moog synthesizers, the music is so young and alive. Truly a guitarist’s revenge on the status quo. 
 </p> 
                    

                <div>
                    <h3>Join the mailing list</h3>
                    <div className="widget_iframe" style={{display:"inline-block", width:"100%", height:"184px", margin:0, padding:0, border:0}}>
                        <iframe className="widget_iframe" src="https://www.reverbnation.com/widget_code/html_widget/artist_27466?widget_id=54&amp;posted_by=artist_27466&pwc[design]=default&pwc[background_color]=%23140d78&pwc[size]=fit"  frameborder="0" scrolling="no" style={{width:"0px", minWidth:"100%", width:"100%", height:"100%"}}></iframe>
                        
                        <div className="footer_branding" style={{display:"none"}}></div>
                    </div>
                </div>
                  
                  
                </Container>
               </div>

               
        )
    }
}

export default SignatureStory;