import React, { Component } from 'react';
import moon from './moon.jpg';



export default  class Canvas extends Component {
    render() {
        return(
          <div>
            <canvas ref="canvas" width={640} height={425} style={{border:"1px solid #000000"}} />
            <img ref="image" src={moon} alt="mooon" className="hidden" />
          </div>
        )
      }
    }
