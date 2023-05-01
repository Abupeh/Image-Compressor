import { ImageData } from 'canvas';

type rgba = `${string} ${string} ${string} ${string}`;
//32 kb
export class AImage {
    private static rgba = 4;
    private compress(data: Uint8ClampedArray) {
        for(let i = 0; i < data.length; i += AImage.rgba) {
            const pixelColor = Array.from(data.slice(i, i+AImage.rgba-1));
            const color = pixelColor.map(v => String.fromCharCode(v)).join('') as rgba;
            if(!this.colorList.includes(color)) {
                this.colorList.push(color);
                this.pixelList.push(this.colorList.length-1)
                continue;
            }
            this.pixelList.push(this.colorList.indexOf(color))
        }
    }

    private convert(colorList: rgba[], pixelList: number[]): string {
        return colorList.join('') + pixelList.join('')
    }

    private colorList: rgba[] = [];
    private pixelList: number[] = [];
    imageData = ""; // " colors: 1 2 3,4 5 6,7 8 9; pixels: 28 39 49 19    "

    width: number;
    height: number;
    constructor({ width, height, data }: ImageData) {
        this.width = width;
        this.height = height;
        this.compress(data);
        this.imageData = this.convert(this.colorList, this.pixelList);
    }
}