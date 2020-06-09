import React from 'react';
// import { 
//     // Route, 
//     Link 
// } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import interscope from '../assets/interscope.png'
import awal from '../assets/awal.png'
import culture from '../assets/culture.png'
import epic from '../assets/epic.png'
import gaffa from '../assets/gaffa.png'
import ultradr from '../assets/ultradr.png'
import vevo from '../assets/vevo.png'
import working from '../assets/working.png'

// NOTE: artists.js and client.js may refactor as the same parameterized component. 


class Vendors extends React.Component {
    render() {
        // const { params } = this.props.match;
        return (
            <Container className="section" >
                <h2> We work with awesome</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nulla eaque cum laudantium enim! Labore aliquid numquam rem perferendis, harum excepturi veniam eos eligendi blanditiis corrupti soluta reprehenderit qui voluptate.

</p>
                <img className="vendors" src={interscope} alt="interscope records" />
                <img className="vendors" src={awal} alt="interscope records" />
                <img className="vendors" src={culture} alt="interscope records" />
                <img className="vendors" src={epic} alt="interscope records" />
                <img className="vendors" src={gaffa} alt="interscope records" />
                <img className="vendors" src={ultradr} alt="interscope records" />
                <img className="vendors" src={vevo} alt="interscope records" />
                <img className="vendors" src={working} alt="interscope records" />
                {/* <h2>Our Clients</h2>
                <p>Server is handling GET requests. Select from menu below. Or type in arbitrary number in address bar (after /).</p>
                <p>User id: {params.id}</p>                
                <ul>
                    <li>
                        <Link to="/clients/1">User 1 </Link>
                    </li>
                    <li>
                        <Link to="/clients/2">User 2 </Link>
                    </li>
                    <li>
                        <Link to="/clients/3">User 3 </Link>
                    </li>
                </ul> */}
                {/* <Route path="/users/:id" component={User} /> */}
                {/* <spacer className="spacer" /> */}
            </Container>
        )
    }
}

export default Vendors;