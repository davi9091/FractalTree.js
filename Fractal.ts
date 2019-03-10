// import {start} from "repl";
// const {ipcRenderer} = require('electron');

class FractalTree {
    private context: CanvasRenderingContext2D;
    private lineColor: string = "#000000";
    private defaultLineWidth: number = 20;

    private static getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private static getRandomColor() {
        let letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    constructor(context) {
        if (context !== null) this.context = context;
        this.context.lineWidth = this.defaultLineWidth;
    }

    private drawLine(startX, startY, len, angle, lineWidth) {
        this.context.translate(startX, startY);
        this.context.lineWidth = lineWidth;
        this.context.rotate(angle * Math.PI/180);
        this.context.moveTo(0, 0);
        this.context.lineTo(0, -len);
        this.context.stroke();
    }

    public drawTree(startX, startY, depth, len?, angle?, lineWidth?, color?) {
        if (lineWidth === undefined) lineWidth = this.defaultLineWidth;
        if (angle === undefined) angle = 0;
        if (len === undefined) len = 95;

        (color === '') ? this.context.strokeStyle = FractalTree.getRandomColor() : this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.save();

        this.drawLine(startX, startY, len, angle, lineWidth);

        if (depth == 0) {
            this.context.restore();
            return;
        }

        this.drawTree(0, -len, depth - 1,len*0.8, FractalTree.getRandomInt(-30, -5), lineWidth * 0.75, color);
        this.drawTree(0, -len, depth - 1, len*0.8, FractalTree.getRandomInt(5, 30), lineWidth * 0.75, color);

        this.context.restore();
    }
}

function constructButton() {
    // @ts-ignore
    let canvas: HTMLCanvasElement = document.getElementById('canvas');
    let context: CanvasRenderingContext2D = canvas.getContext('2d');
    // @ts-ignore
    let colorInput: HTMLInputElement = document.getElementById('colorInput');
    // @ts-ignore
    let depthInput: HTMLInputElement = document.getElementById('depthInput');

    let depth: number;
    let color: string = colorInput.value;

    (depthInput.value === '') ? depth = 11 : depth = +depthInput.value;


    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    console.log(canvas.width, canvas.height);
    let tree = new FractalTree(context);
    // tree.drawTree(Math.round(can.width / 2), can.height, 0, 9);
    tree.drawTree(canvas.width / 2, canvas.height, depth,undefined,undefined,undefined, color);
}

function cleanButton() {
    let can: HTMLCanvasElement = document.getElementById('canvas');
    let ctxt: CanvasRenderingContext2D = can.getContext('2d');
    ctxt.clearRect(0, 0, can.width, can.height);
}