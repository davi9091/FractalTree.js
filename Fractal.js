// import {start} from "repl";
// const {ipcRenderer} = require('electron');
var FractalTree = /** @class */ (function () {
    function FractalTree(context) {
        this.lineColor = "#000000";
        this.defaultLineWidth = 20;
        if (context !== null)
            this.context = context;
        this.context.lineWidth = this.defaultLineWidth;
    }
    FractalTree.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    FractalTree.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    FractalTree.prototype.drawLine = function (startX, startY, len, angle, lineWidth) {
        this.context.translate(startX, startY);
        this.context.lineWidth = lineWidth;
        this.context.rotate(angle * Math.PI / 180);
        this.context.moveTo(0, 0);
        this.context.lineTo(0, -len);
        this.context.stroke();
    };
    FractalTree.prototype.drawTree = function (startX, startY, depth, len, angle, lineWidth, color) {
        if (lineWidth === undefined)
            lineWidth = this.defaultLineWidth;
        if (angle === undefined)
            angle = 0;
        if (len === undefined)
            len = 95;
        (color === '') ? this.context.strokeStyle = FractalTree.getRandomColor() : this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.save();
        this.drawLine(startX, startY, len, angle, lineWidth);
        if (depth == 0) {
            this.context.restore();
            return;
        }
        this.drawTree(0, -len, depth - 1, len * 0.8, FractalTree.getRandomInt(-30, -5), lineWidth * 0.75, color);
        this.drawTree(0, -len, depth - 1, len * 0.8, FractalTree.getRandomInt(5, 30), lineWidth * 0.75, color);
        this.context.restore();
    };
    return FractalTree;
}());
function constructButton() {
    // @ts-ignore
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    // @ts-ignore
    var colorInput = document.getElementById('colorInput');
    // @ts-ignore
    var depthInput = document.getElementById('depthInput');
    var depth;
    var color = colorInput.value;
    (depthInput.value === '') ? depth = 11 : depth = +depthInput.value;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    console.log(canvas.width, canvas.height);
    var tree = new FractalTree(context);
    // tree.drawTree(Math.round(can.width / 2), can.height, 0, 9);
    tree.drawTree(canvas.width / 2, canvas.height, depth, undefined, undefined, undefined, color);
}
function cleanButton() {
    var can = document.getElementById('canvas');
    var ctxt = can.getContext('2d');
    ctxt.clearRect(0, 0, can.width, can.height);
}
