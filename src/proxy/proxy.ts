import { Image } from './image';
import { RetinaImage } from './retinaImage';

export class ProxyImage implements Image {
    image?:RetinaImage;
    private readonly imagePath:string;

    constructor(imagePath:string) {
        this.imagePath = imagePath;
    }

    showImage(): void {
        if (!this.image) {
            this.image = new RetinaImage(this.imagePath);
        }
        this.image.loadImage(this.imagePath);
    }

}


