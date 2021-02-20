jest.mock('./retinaImage');
import { ProxyImage } from './proxy';
import { RetinaImage } from './retinaImage';

beforeEach(() => {
    // @ts-ignore
    RetinaImage.mockClear();
})

describe('proxy design pattern', () => {
    it('should only load the image when it needs to be rendered', () => {
        const image = new ProxyImage('test.png');
        expect(image.image).toBe(undefined);
        image.showImage();
        // @ts-ignore
        const mockRetinaImageInstance = RetinaImage.mock.instances[0];
        const mockLoadImage = mockRetinaImageInstance.loadImage;
        expect(mockLoadImage).toHaveBeenCalledTimes(1);
    })
})
