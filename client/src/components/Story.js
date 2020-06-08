import React from 'react';
import Col from 'react-bootstrap/Col'
import { 
} from 'react-router-dom';

class Story extends React.Component {
    render() {
        return (
            <div>
                {/* <h2>Story </h2>
                <h5>Work with Versatile Tone Group</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.</p> */}
                
                {/* BOOTSTRAP */}
                <div className="row section">
                    <Col></Col>
                    <Col sm={7}>
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                        <h2 className="heading" >Make your Elevator Pitch here!!</h2>
                        <p>This is your main marketing pitch. What do you really to say? This should be a concise 3 or 4 sentence pitch to get your target audiences to do something: the Call To Action. </p>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        {/* <p><a className="btn btn-secondary" href="https://apple.com" role="button">View details</a></p> */}
                    </Col>
                    <Col></Col>
                </div>

                {/* Add space */}
                <br />
                <br />

            </div>
        )
    }
}

export default Story;