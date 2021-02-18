type Color = string;

interface Theme {
    mainColor: Color;
    secondaryColor: Color;
    contrastColor: Color;
}

export class WhiteTheme implements Theme {
    mainColor: Color = '#fff';
    secondaryColor: Color = '#333';
    contrastColor: Color = '#000';
}

export class BlackTheme implements Theme {
    mainColor: Color = '#000';
    secondaryColor: Color = '#555';
    contrastColor: Color = '#fff';
}

interface Style {
    readonly theme: Theme;
    getStyle(): ButtonStyle;
}

type ButtonStyle = {
    backgroundColor: Color;
    color: Color;
};

export class Button implements Style {
    readonly theme: Theme;
    constructor(theme: Theme) {
        this.theme = theme;
    }

    getStyle(): ButtonStyle {
        return {
            backgroundColor: this.theme.mainColor,
            color: this.theme.contrastColor
        };
    }
}
