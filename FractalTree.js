import {FractalTree} from "./Fractal.js"

// class FractalTree {
//   constructor(context) {
//     this.context = context; // give canvas context to draw in
//     this.context.fillStyle = '#AAAAAA';
//     this.defaultLineWidth = 20;
//
//     this.degToRad = Math.PI / 180.0; // convert degrees to radians
//     this.depth = 9; // default for our purposes
//   }
//
//   drawTree(x1, y1, angle, depth) {
//     if (depth !== 0) {
//       let x2 = x1 + (Math.cos(angle * this.degToRad) * depth * 10.0);
//       let y2 = y1 + (Math.sin(angle * this.degToRad) * depth * 10.0);
//       this.drawLine(x1, y1, x2, y2, 10);
//       this.drawTree(x2, y2, angle - 20, depth - 1);
//       this.drawTree(x2, y2, angle + 20, depth - 1);
//     }
//     console.log('finished!');
//   }
//
//   drawLine(x1, y1, x2, y2, lineWidth) {
//     console.log('Trying to draw the line');
//     if (lineWidth === null) context.lineWidth = this.defaultLineWidth;
//     else this.context.lineWidth = lineWidth;
//     this.context.beginPath();
//     this.context.moveTo(x1, y1);
//     this.context.lineTo(x2, y2);
//     this.context.closePath();
//     // this.context.stroke();
//   }
//
//   setDepth(depth) {
//     this.depth = depth;
//   }
//
//   getDepth() {
//     return this.depth;
//   }
// }

function buttonClicked(){
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  let tree = new FractalTree(context);
  console.log(canvas.offsetWidth);
  console.log(canvas.offsetHeight);
  tree.drawTree(canvas.offsetWidth / 2, canvas.offsetHeight, 10 ,9);
  // tree.drawLine(canvas.offsetWidth / 2, canvas.offsetHeight, canvas.offsetWidth, 0, 10);
}