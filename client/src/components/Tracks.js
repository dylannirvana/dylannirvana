import React from 'react';
import wave from '../wave.gif';
import { 
} from 'react-router-dom';

class Tracks extends React.Component {
    render() {
        return (
            <div>
                <h2>Tracks </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p>
                
                {/* BOOTSTRAP */}
                <main role="main" className="container">
                    <div style={{padding: "2rem"}} className="jumbotron">
                        <h4>Super duper track 1</h4>
                        <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works.</p>
                        <div>
                            <img src={wave} className="container" alt="track" />
                        </div>
                    </div>

                    <div style={{padding: "2rem"}} className="jumbotron">
                        <h4>Super duper track 2</h4>
                        <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works.</p>
                        <div>
                            <img src={wave} className="container" alt="track" />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Tracks;