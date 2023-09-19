interface IExport {
    export(): void;
}

class PDFExport implements IExport {
    export(): void {
        console.log('Exporting to PDF');
    }
}

class SVGExport implements IExport {
    export(): void {
        console.log('Exporting to SVG');
    }
}

class PageComponent {
    private exportStrategy: IExport;

    constructor(exportStrategy: IExport) {
        this.exportStrategy = exportStrategy;
    }

    setExportStrategy(exportStrategy: IExport): void {
        this.exportStrategy = exportStrategy;
    }

    export(): void {
        this.exportStrategy.export();
    }
}

// example usage
const pageComponent = new PageComponent(new PDFExport());
pageComponent.export(); // Exporting to PDF
