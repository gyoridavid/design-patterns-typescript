import { WhiteTheme, BlackTheme, Button } from './bridge';

describe('bridge design pattern', () => {
    it('should return proper css', () => {
        const whiteTheme = new WhiteTheme();
        const blackTheme = new BlackTheme();

        const whiteButton = new Button(whiteTheme);
        const blackButton = new Button(blackTheme);

        expect(whiteButton.getStyle().backgroundColor).toBe(whiteTheme.mainColor);
        expect(blackButton.getStyle().backgroundColor).toBe(blackTheme.mainColor);
    });
});
