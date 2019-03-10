var ipcRenderer = require('electron').ipcRenderer;
var Menu = /** @class */ (function () {
    function Menu() {
        ipcRenderer.on('help', Menu.openHelp);
        ipcRenderer.on('about', Menu.openAbout);
        this.setupCloseLinks();
        this.resizeCanvas();
    }
    Menu.openHelp = function () {
        document.getElementById('help').classList.toggle('hidden');
    };
    Menu.openAbout = function () {
        document.getElementById('about').classList.toggle('hidden');
    };
    Menu.prototype.setupCloseLinks = function () {
        document.querySelectorAll('.dialogBox .close-dialog-link').forEach(function (link) {
            link.addEventListener('click', function () { return link.parentElement.classList.toggle('hidden'); });
        });
    };
    Menu.prototype.resizeCanvas = function () {
        window.onresize = function () {
            // @ts-ignore
            var canvas = document.getElementById('canvas');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        };
    };
    return Menu;
}());
window.addEventListener("load", function () {
    new Menu();
});
