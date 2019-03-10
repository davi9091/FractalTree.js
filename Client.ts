const {ipcRenderer} = require('electron');

class Menu {
    constructor() {
        ipcRenderer.on('help', Menu.openHelp);
        ipcRenderer.on('about', Menu.openAbout);
        this.setupCloseLinks();
        this.resizeCanvas();
    }

    public static openHelp() {
        document.getElementById('help').classList.toggle('hidden');
    }

    public static openAbout() {
        document.getElementById('about').classList.toggle('hidden');
    }

    public setupCloseLinks() {
        document.querySelectorAll('.dialogBox .close-dialog-link').forEach(link => {
            link.addEventListener('click', () => link.parentElement.classList.toggle('hidden'));
        });
    }

    public resizeCanvas() {
        window.onresize = function () {
            // @ts-ignore
            const canvas: HTMLCanvasElement = document.getElementById('canvas');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const context: CanvasRenderingContext2D = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

}

window.addEventListener("load", function (){
    new Menu();
});