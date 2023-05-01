//32 kb
class AImage {
    static rgba = 4;
    compress(data) {
        for (let i = 0; i < data.length; i += AImage.rgba) {
            const pixelColor = Array.from(data.slice(i, i + AImage.rgba - 1));
            const color = pixelColor.map(v => String.fromCharCode(v)).join('');
            if (!this.colorList.includes(color)) {
                this.colorList.push(color);
                this.pixelList.push(this.colorList.length - 1);
                continue;
            }
            this.pixelList.push(this.colorList.indexOf(color));
        }
    }
    convert(colorList, pixelList) {
        return colorList.join('') + pixelList.join('');
    }
    colorList = [];
    pixelList = [];
    imageData = ""; // " colors: 1 2 3,4 5 6,7 8 9; pixels: 28 39 49 19    "
    width;
    height;
    constructor({ width, height, data }) {
        this.width = width;
        this.height = height;
        this.compress(data);
        this.imageData = this.convert(this.colorList, this.pixelList);
    }
}
export { AImage };
