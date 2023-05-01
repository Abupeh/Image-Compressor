import { writeFileSync } from "fs";
import { createCanvas, loadImage } from 'canvas';
import { AImage } from './AImage.js';

const ctx = createCanvas(
    100,
    100
).getContext("2d");


loadImage("./assets/mountains2.png").then((mountains) => {
	ctx.drawImage(mountains, 0, 0, mountains.width, mountains.height);
	const imageData = ctx.getImageData(0, 0, mountains.width, mountains.height);
	const compressedImage = new AImage(imageData);
	writeFileSync("./assets/results.txt", compressedImage.imageData);
	// ctx.drawImage(mountains, 0, 0, mountains.width * 5, mountains.height * 5);
});
console.log(String.fromCharCode(16960));
