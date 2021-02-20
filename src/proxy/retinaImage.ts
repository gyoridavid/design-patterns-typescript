import { Image } from './image';

export class RetinaImage implements Image {
    constructor(imagePath:string) {
        this.loadImage(imagePath);
    }

    loadImage(imagePath:string):void {
        // implementation here
    }

    showImage(): void {
        // rendering image
    }
}
