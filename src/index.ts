import { Application } from "pixi.js";

const app = new Application<HTMLCanvasElement>({
    width: 640,
    height: 360,
    backgroundColor: 0x00ffff,
});
document.body.appendChild(app.view);
