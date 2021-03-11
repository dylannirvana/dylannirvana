import React, { Component } from 'react';
import ReactPlayer from 'react-player/lazy'
import Container from 'react-bootstrap/Container';
// import AppleMusic from './AppleMusic';

// Resource: https://cookpete.com/react-player/ 

class Soundcloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundcloud: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="section">
                 {/* SOUNDCLOUD */}

                 <h1 className="prettybigname">Dylan Nirvana</h1>
                    {/* Signature Story */}
                
                 <Container>
                    <h3><span style={{color: "#f3cd31"}}>"Pure New York City Punk Rock"</span> - London B-Max Festival. A witty and vainglorious full heave of the cutlery. A guitarist's revenge on the status quo. <span style={{color: "#f3cd31"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice <span style={{color: "#f3cd31"}}>“A harder early Bowie”</span> - Country Music Awards</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                
               <p>Tired of your little lockdown?</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                 <h3>This is the Greatest Day of my Life</h3>
                <div className='player-wrapper-soundcloud'>
                    <ReactPlayer
                    className='react-player'
                    url='https://soundcloud.com/dylannirvana/this-is-the-greatest-day-of-my-life'
                    width='100%'
                    height='auto'
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                </div> 
                    <br />
                    <br />
                    <br />
                    <p>
                    Words & music Dylan Nirvana  ©2021 BMI</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <p><a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/dylannirvana/this-is-the-greatest-day-of-my-life">What was the Greatest Day of your Life? <i className="fab fa-soundcloud fa-2x"></i></a></p>                    
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
               </Container>

                  {/* <p>From the record Anne Boleyn by Dylan Nirvana</p> */}
                 {/* <p>Automatic is the opening track to the racy record titled Anne Boleyn. Dylan Nirvana retells steamy bits of English history with Hard Rock for modern times, Marshall amps blaring. Sick with wit and catchy as the Black Death, the Queen of a Thousand Days loses her head. And so might you.</p>  */}

               {/* <AppleMusic /> */}
            </div>
        )
    }
}

export default Soundcloud;
 