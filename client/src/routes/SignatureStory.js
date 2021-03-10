import React from 'react';
import Container from 'react-bootstrap/Container'
// import Contact from './contact';
import Caitlyn from '../assets/caitlyn.png'
import MailingList from '../components/Mailinglist';
// import Onesheet from '../components/Onesheet';
// import TweenMax from 'gsap'

// import Facebook from './Facebook'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class SignatureStory extends React.Component {
    render() {
        return (
            <div >
                <header className="App-header">
              <img src={Caitlyn} alt='Caitlyn Lyon' style={{
                type: 'img/png',
                objectFit: 'cover',
                overflow: 'hidden',
                width: '100vw',
                height: '100vh',
                }} />

                <h1 className="bigname" style={{
                        // position: 'absolute',
                        // color: '#000',
                        // bottom: '1.3rem',
                        // opacity: 0,
                        // transition: 'opacity 1 2s',
                        // fontSize: '300%'
                    }}
                    >Dylan Nirvana</h1>



          </header>
                <Container className="section">
                    {/* <h1><span style={{color: "#f3cd31"}}>Dylan Nirvana</span></h1> */}
                    {/* Signature Story */}
                    {/* <p>Tired of your little lockdown?</p> */}

                    <h3><span style={{color: "#f3cd31"}}>"Pure New York City Punk Rock"</span> - London B-Max Festival. A witty and vainglorious full heave of the cutlery. A guitarist's revenge on the status quo. <span style={{color: "#f3cd31"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice <span style={{color: "#f3cd31"}}>“A harder early Bowie”</span> - Country Music Awards</h3>
                <br />

                    <p>Dylan Nirvana became a familiar voice in the New York City underground. Most notably, the anti-folk scene downtown at the East Village's Sidewalk Cafe. With Billy Ficca (from the legendary band Television) on drums, <span style={{color: "#f3cd31"}}>Dylan Nirvana and The Bad Flowers</span> have played at Arlene Grocery, Crash Mansion, Lit, Luna Lounge, CBGB and Pianos. </p>

                    {/* <h5> <span style={{color: "#f3cd31"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice</h5> */}
                    
                    <p>Introduced as <span style={{color: "#f3cd31"}}>"Pure New York City Punk Rock"</span>  at the London B-Max Festival. Performed along side Living Colour’s Corey Glover, Chris Barron from the Spin Doctors, Blues Traveler’s John Popper, Regina Spektor, Feist and Nelly McKay. Dylan Nirvana's vibe is a hot mix of Revolver, Exile on Main Street, English Settlement, Raw Power, Ziggy Stardust and T-Rex' The Slider. </p>
                   
                    {/* <p><span style={{color: "#f3cd31"}}> <a href="https://soundcloud.com/dylannirvana/this-is-the-greatest-day-of-my-life">This is the Greatest Day of my Life.</a> </span> So this guy is talking to his dog (loyal confidant) about how bored his family is during lockdown. Dog is happy because everyone is home. Grumpy Dad lapses into an exuberant daydream. Kinda reminds me of Green Day, Talking Heads, XTC, The Ramones. How about you?  </p> */}

                    {/* <h5> <span style={{color: "#f3cd31"}}>“A harder early Bowie”</span> - Country Music Awards</h5> */}

                     {/* <p>The upcoming record <span style={{color: "#f3cd31"}}>Revolutionary Road</span> produced by Jim Wirt (Fiona Apple), has a story that is a movie in itself. Addiction, theft, unexpected tattoos, digital redemption. Features some unusually candid songwriting. And a new take on living New York Punk, New Wave and Glam Rock. Songs include Rebound Girl, Solitudes and You're Fucking Wrong. Keep an eye out this Spring. </p> */}

                    <br />
                    {/* <Onesheet /> */}

                    {/* <Contact /> */}

                    <MailingList />
                    
                </Container>
               </div>

               
        )
    }
}

export default SignatureStory;