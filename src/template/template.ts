type unifiedCV = {}

abstract class CVParser {
    openFile(file: string): void {}
    closeFile(): void {}
    abstract parseFile(): unifiedCV
}

class CVParserPDF extends CVParser {
    parseFile(): unifiedCV {
        return {}
    }
}

class CVParserDOC extends CVParser {
    parseFile(): unifiedCV {
        return {}
    }
}

// usage example
const pdfPath = 'path/to/file.pdf'
const pdfParser = new CVParserPDF()
pdfParser.openFile(pdfPath)
const cv = pdfParser.parseFile()
pdfParser.closeFile()
