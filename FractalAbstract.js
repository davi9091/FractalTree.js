class FractalAbstract {
  constructor(context) {
    this.context = context; // give canvas context to draw in
    this.context.fillStyle = '#000';
    this.context.StartLineWidth = 20;

    this.degToRad = Math.PI / 180.0; // convert degrees to radians
    this.depth = 9; // default for our purposes
  }

  drawLine(x1, y1, x2, y2, lineWidth) {
    context.beginPath();
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = lineWidth;
    context.closePath();
    context.stroke();
  }

  setDepth(depth) {
    this.depth = depth;
  }

  getDepth() {
    return this.depth;
  }
}