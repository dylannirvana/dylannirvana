import React from 'react';
// import Container from 'react-bootstrap/Container'
import ScriptTag from 'react-script-tag'

class Convertkit extends React.Component {
    componentDidMount() {

    }

      render() {       
          return (
            <div style={{paddingLeft:50}} >
                {/* <Container className="section"> */}
                    <p>Yo</p>
                    <ScriptTag isHydrating={false} data-uid="e9274113f5" src="https://astounding-creator-7935.ck.page/e9274113f5/index.js" />                {/* </Container> */}

            </div>
        )
    }
}

export default Convertkit;