// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {  Rect, Transformer } from 'react-konva';



// export default class TransformerComponent extends React.Component {
//     componentDidMount() {
//       this.checkNode();
//     }
//     componentDidUpdate() {
//       this.checkNode();
//     }
//     checkNode() {
//       console.log("check node",this.props)
//       // here we need to manually attach or detach Transformer node
//       const stage = this.transformer.getStage();
//       console.log("stage",stage)
//       const { selectedShapeName } = this.props;

//         console.log("selectedShapeName",this.props)

//       const selectedNode = stage.findOne('.' + selectedShapeName);
//     //   console.log("selected node",selectedNode)

//     //   // do nothing if selected node is already attached
//     //   if (selectedNode === this.transformer.node()) {
//     //     return;
//     //   }
//     //   if (selectedNode) {
//     //     this.transformer.attachTo(selectedNode);
//     //   } else {
//     //     this.transformer.detach();
//     //   }
//     //   this.transformer.getLayer().batchDraw();
//     }
//     render() {
//       return (
//         <Transformer
//           ref={node => {
//               console.log("node",node)
//             this.transformer = node;
//           }}
//         />
//       );
//     }
//   }