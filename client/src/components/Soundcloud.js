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
                    <p>Tired of your little lockdown?</p>
                    <br />
                    <br />
                 <h3>This is the Greatest Day of my Life</h3>
                 <Container>
                     {/* <p>From the record Anne Boleyn by Dylan Nirvana</p> */}
                 {/* <p>Automatic is the opening track to the racy record titled Anne Boleyn. Dylan Nirvana retells steamy bits of English history with Hard Rock for modern times, Marshall amps blaring. Sick with wit and catchy as the Black Death, the Queen of a Thousand Days loses her head. And so might you.</p>  */}

                 </Container>

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
                   
               <Container>
                    <br />
                    <br />
                    <br />
               {/* <p>
                I know a girl whose love never runs out of batteries
                She's a regular orgasm factory
                She don't get tired
                She don't get bored 
                She's gotta Pocket Rocket stuffed in her drawer
               
                She's Automatic
                Emmanuelle don't need a man
                As long as she can use her hand
                </p>
                <p>
                Sydney's a girl whose as smart as she looks
                One of the guys
                But she's not a guy and I can tell ya
                Forget the nails
                Forget the tan
                Bohemia never saw such epicurean 
                
                She's Automatic
                When she gets what she wants
                She's democratic
                You can have her it, it doesn't matter
                Pretty girls never know what they want
                </p>
                <p>
                Erin takes me out behind her neighbor's car
                I know she'll go but I don't know just how far
                First she sits
                And the she kneels
                But what I didn't know is that she steals
               
                She's Automatic
                Practically the time
                She's quite an addict
                You can have her it doesn't matter
                Pretty girls never know what they want
                </p> */}

                {/* <p>
                Rebound girl
                She is the ticket's gonna take it away
                Rebound girl
                Now I got a feeling and it's here to stay
                Rebound girl

                I've been so down
                (When will you be coming 'round)
                I've been so out

                And I can't get get off of this roundabout 
                I see the flames coming and it's nothing to tout
                That I got burned and I can't get over her
                'till my

                Rebound girl
                She is the ticket's gonna take it away
                Rebound girl
                Now I gotta feeling and it's here to stay
                Rebound girl

                I've been shot down
                (and you can see it in my eyes)
                Right out of the skies

                And I don't know why
                To tell it like it is 
                I should just forget it
                But I can't seem to let it
                That I got burned
                And I can't get over her
                'til my... 

                Rebound girl
                She is the ticket's gonna take it away
                Rebound girl
                Now I gotta feeling and it's here to stay
                Rebound girl
                </p> */}

                <p>
                Words & music Dylan Nirvana  ©2021 BMI</p>
                <br />
                <h3><span style={{color: "#f3cd31"}}>"Pure New York City Punk Rock"</span> - London B-Max Festival. A witty and vainglorious full heave of the cutlery. A guitarist's revenge on the status quo. <span style={{color: "#f3cd31"}}>“Like Elvis Costello. Morrissey meets Motörhead”</span> - The Village Voice <span style={{color: "#f3cd31"}}>“A harder early Bowie”</span> - Country Music Awards</h3>
                <br />
                <br />
                <br />
               </Container>
               {/* <AppleMusic /> */}
            </div>
        )
    }
}

export default Soundcloud;
 