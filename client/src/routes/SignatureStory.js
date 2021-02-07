import React from 'react';
import Container from 'react-bootstrap/Container'
import Contact from './contact';
// import Facebook from './Facebook'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class SignatureStory extends React.Component {
    render() {
        return (
            <div >
                <Container className="section">
                    <h1><span style={{color: "red"}}>Dylan Nirvana</span></h1>
                    {/* Signature Story */}
                    {/* <p>Tired of your little lockdown?</p> */}

                    <h3>A full heave of the cutlery. A guitarist's revenge on the status quo. <span style={{color: "red"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice <span style={{color: "red"}}>“A harder early Bowie”</span> - Country Music Awards</h3>
                <br />

                    <p>Dylan Nirvana is a unique voice in the New York City music scene. He performed CBGB with his band The Bad Flowers and were introduced as "Pure New York City Punk Rock" at the London Brockley Music Festival.</p>

                    {/* <h5> <span style={{color: "red"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice</h5> */}
                    
                    <p>DJ'ed for the New York Dolls and Gogol Bordello. Performed along side Living Colour’s Corey Glover, Chris Barron from the Spin Doctors, Blues Traveler’s John Popper, Regina Spektor, Feist and Nelly McKay. Dylan Nirvana's vibe is a hot mix of Revolver, Exile, English Settlement, Raw Power, Ziggy Stardust and T-Rex' The Slider. </p>

                    {/* <h5> <span style={{color: "red"}}>“A harder early Bowie”</span> - Country Music Awards</h5> */}

                     <p>Revolutionary Road, produced by Jim Wirt (Fiona Apple) with Billy Ficca (from the epic bands Television, and the Waitresses) features some unusually candid songwriting and is a new take on New York Punk, New Wave and Glam Rock. Songs include Rebound Girl, Solitudes and You're Fucking Wrong. To be released Spring 2021. </p>

                    <Contact />
                    
                </Container>
               </div>

               
        )
    }
}

export default SignatureStory;