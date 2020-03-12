import React, { Component } from 'react';
// import mountain from './mountain.jpg';
import Rectangle from "./Rectangle.js"
import cars from "./cars.jpeg";
import cubecar from "./cubecar.jpeg";
import CubeImg from "./cubeimage.jpeg"

import konva, { Context } from "konva";
// import Canva from "./canvas.js"
import Cube from 'react-3d-cube';
import TransformerComponent from "./Transformer.js"

import {
  Stage,
  Layer,
  Rect,
  Shape,
  Image,
  // Circle,
  // RegularPolygon,
} from 'react-konva';
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      opacity1: 0,
      position: 0,
      name: "",
      rect: "rect",
      top: 0,
      left: 0,
      width: 780,
      height: 700,
      // imgwidth: 780,
      // imgheight: 700,
      imgwidth: 700,
      imgheight: 700,
      count: 0,
      radius: 70,
      color: 'yellowgreen',
      color2: "blue",
      black: "black",
      isMouseInside: false,
      rangeValue: 1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleTri = this.handleTri.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleZoomLevelIncrease = this.handleZoomLevelIncrease.bind(this);
    this.handleZoomLeveldecrease = this.handleZoomLeveldecrease.bind(this);
    // this.handleBound = this.handleBound.bind(this);
    // this.handleClickRect = this.handleClickRect.bind(this);
  }
  handleTri() {
    console.log("tri clicked")
    this.setState({ left: 800 })
  }
  handleClick() {
    const layer = this.refs.layer;
    const rect = this.refs.rect;
    var transformer = new konva.Transformer({
      node: rect,
      rotateAnchorOffset: 45,
      // enabledAnchors: ['top-left',
      //   'top-right',
      //   'bottom-left',
      //   'bottom-right',
      // ]
    });
    layer.add(transformer);
    layer.draw();

    this.setState({
      opacity: 0.5,
      opacity1:0
    })
  }

  handleZoom(zoom) {
    console.log("zoom", zoom)
    if (zoom === 1) {
      this.setState({ imgwidth: 250, imgheight: 250 })
    }
    else if (zoom === 2) {
      this.setState({ imgwidth: 400, imgheight: 400 })
    }
    else if (zoom === 3) {
      this.setState({ imgwidth: 550, imgheight: 550 })
    }
    else if (zoom === 4) {
      this.setState({ imgwidth: 780, imgheight: 700 })
    }
  }
  handleMouseEnter() {
    console.log("MouseEnter")
  }
  handleMouseLeave() {
    console.log("MouseLeave")
  }
  handleZoomLevelIncrease() {
    console.log("handleZoomLevelIncrease")
    let wid = this.state.imgwidth + 5;
    let hei = this.state.imgheight + 5;
    this.setState({
      imgwidth: wid, imgheight: hei
    })
  }
  handleZoomLeveldecrease() {
    console.log("handleZoomLeveldecrease")
    let wid = this.state.imgwidth - 5;
    let hei = this.state.imgheight - 5;
    this.setState({
      imgwidth: wid, imgheight: hei
    })

  }
  handleChange(event) {
    console.log("change", event.target.value)
    if (event.target.value > this.state.rangeValue) {
      this.setState({
        rangeValue: event.target.value
      })
      this.handleZoomLevelIncrease();

    }
    else {
      this.setState({
        rangeValue: event.target.value
      })
      this.handleZoomLeveldecrease();
    }

  }
  handleCubeClick() {

    this.setState({

      opacity1: .4,
      opacity:0,
      // name:"cube"
    })
   
// this.stageClicked();
this.componentDidMount();


  }


  componentDidMount(){
    const layer = this.refs.layer;
    const cube = this.refs.cube;

    var transformer = new konva.Transformer({
      node: cube,
      rotateAnchorOffset: 180,
      // enabledAnchors: ['top-left',
      //   'top-right',
      //   'bottom-left',
      //   'bottom-right',
      // ]
    });
    layer.add(transformer);
    layer.draw();
  }
 

  stageClicked(){
    console.log("stageclicked")
  const stage = this.refs.stage.getStage();
    stage.find('Transformer').destroy();
    stage.draw();

}
// handlecubeClickedddd(e){
//   console.log("cubeClickedddd",e.target)
// const cube=this.refs.cube;
//   const stage =  this.refs.stage.getStage();
//   stage.find('Transformer').destroy()
//   // create new transformer
//   var tr = new konva.Transformer();
//   var layer = this.refs.layer.getStage(tr);
// // layer.add(cube);
//   tr.attachTo(e.target) 
// }


// handleClickRect(e){

//   const rect=this.refs.rect;
//   const stage =  this.refs.stage.getStage();
//   stage.find('Transformer').destroy()
//   // create new transformer
//   var tr = new konva.Transformer();
//   var layer = this.refs.layer.getStage(tr);
// // layer.add(cube);
//   tr.attachTo(e.target) 

// }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="col-sm-12">

            <span className="glyphicon glyphicon-stop squ" onClick={this.handleClick} style={{ marginLeft: this.state.position, marginTop: this.state.top }} resize="both"></span><br />
      </div>

          <div className="col-sm-12">
            {/* <span className="glyphicon glyphicon-triangle-top tri" style={{ marginLeft: this.state.left, color: "green", opacity: ".4" }} onClick={this.handleTri}></span> */}
            <img src={CubeImg} alt="cubeImage" style={{ width: 90, height: 90, marginLeft: 30 }} onClick={this.handleCubeClick.bind(this)} />
            <br />


            <div style={{ marginTop: 60 }}>
              <span>Zoom level of the image</span>
              <div className="slidecontainer">
                <input type="range" min="1" max="50" value={this.state.rangeValue} className="slider" id="myRange" onChange={this.handleChange} />
              </div>
              <div className="align">
                <button type="button" name="1" className="btn btn-primary btns" onClick={this.handleZoom.bind(this, 1)}>25%</button>
                <button type="button" name="2" className="btn btn-primary btns" onClick={this.handleZoom.bind(this, 2)}>50%</button>
                <button type="button" className="btn btn-primary btns" onClick={this.handleZoom.bind(this, 3)}>75%</button>
                <button type="button" className="btn btn-primary btns" onClick={this.handleZoom.bind(this, 4)}>100%</button>
              </div>
            </div>
          </div>

        </div>
        <div className="col-sm-5  ">
          <div>

            <Stage
              ref="stage"
              // width={window.innerWidth}
              // height={window.innerHeight}
              width={1000}
              height={900}
              // style={{ border: "1px solid " }}
              onClick={this.stageClicked.bind(this)}
            >
              <Layer ref="layer">
                <Shape
                  ref="cube"
                  x={-600} y={280}               
                  sceneFunc={(context, shape) => {
                 


                    context.beginPath();
                    context.moveTo(960, 128);
                    context.lineTo(860, 34);
                    context.lineTo(860, -36);
                    context.lineTo(960, 28);
                    context.stroke();
                    context.fill();
                    context.style = "green";
                    context.closePath();
                    context.fillStrokeShape(shape);



                    context.beginPath();
                    context.moveTo(960, 128);
                    context.lineTo(1060, 14);
                    context.lineTo(1060, -36);
                    context.lineTo(960, 28);
                    context.stroke();
                    context.fill();
                    context.style = "green";
                    context.closePath();
                    context.fillStrokeShape(shape);



                    context.beginPath();
                    context.moveTo(960, 28);
                    context.lineTo(860, -36);
                    context.lineTo(960, -72);
                    context.lineTo(1060, -36);
                    context.stroke();
                    context.fill();
                    context.style = "green";
                    context.closePath();
                    context.fillStrokeShape(shape);

                  }}
                  fill="blue"
                  // stroke="yellow"
                  strokeWidth={3}
                  draggable
                  opacity={this.state.opacity1}
                  //    onClick={this.handlecubeClickedddd.bind(this)}

                />
                <Rect
                  style={{ border: "1px solid #00FFFF" }}
                  x={80} y={80} width={120} height={120}
                  fill={this.state.color2}
                  opacity={this.state.opacity}
                  draggable
                  ref="rect"

                  //  onClick={this.handleClickRect.bind(this)}
                  onDragEnd={this.dragend}
                  onDragMove={this.dragstart}
                  onDragMove={this.dragmove}


                />


                {/* <TransformerComponent
                selectedShapeName={this.state.name}
                /> */}
                {/* <Circle
                  ref="circle"
                  draggable
                  x={100} y={60} radius={50}
                  fill={this.state.color}
                  shadowBlur={40}
                  stroke={this.state.black}
                    onMouseEnter={this.handleMouseEnter.bind(this)}
                  onMouseLeave={this.handleMouseLeave.bind(this)}
                />
                <RegularPolygon
                  ref="regularPolygon"
                  draggable
                  x={250} y={250}
                  radius={this.state.radius}
                  onClick={this.handleDragClick.bind(this)}
                  fill={this.state.color2}
                  sides={4}
                  stroke={this.state.black}
                  opacity={0.2}
                /> */}

              </Layer>
            </Stage>
            {/* <img src={mountain} alt='mountain' className="mountain" style={{ width: this.state.imgwidth, height: this.state.imgheight, marginLeft: 16 }} /> */}

            <img src={cubecar} alt='cubecar' className="mountain" style={{ width: this.state.imgwidth, height: this.state.imgheight, marginLeft: 16 }} />

          </div>
        </div>
        <div className="col-sm-3">
          {/* <Cube
         size={250} 
         style={{marginTop:350}} 
         opacity={.3}
         

         /> */}

        </div>
      </div>

    );
  }
}


// import React, { Component } from 'react';
// import moon from './moon.jpg';


// export default  class Canvas extends Component {

//   componentDidMount() {
//     const canvas = this.refs.canvas
//     const ctx = canvas.getContext("2d")
//     const img = this.refs.image;
//     img.onload = () => {
//       ctx.drawImage(img, 100,200,50,60)
//       ctx.font = "40px Courier"
//       ctx.fillText(this.props.text, 210, 75)
//     }
//   }
//     render() {
//         return(
//           <div>
//             <canvas ref="canvas" width={640} height={425} style={{border:"1px solid #000000"}}

//             />

//             <img ref="image" src={moon} className="hidden" />
//           </div>
//         )
//       }
//     }
