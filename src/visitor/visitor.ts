interface IVisitor {
    visit(e: ElementA): void
    visit(e: ElementB): void
    visit(e: ElementC): void
}
interface IElement{
    accept(v: IVisitor): void
}

class Visitor implements IVisitor {
    visit(e: ElementA): void
    visit(e: ElementB): void
    visit(e: ElementC): void

    visit(e: unknown): void {
        // implementation signature
    }
}

class ElementA implements IElement {
    accept(v: IVisitor): void {
        v.visit(this);
    }
}
class ElementB implements IElement {
    accept(v: IVisitor): void {
        v.visit(this);
    }
}
class ElementC implements IElement {
    accept(v: IVisitor): void {
        v.visit(this);
    }
}

// usage example
const visitor = new Visitor();
const elemA = new ElementA();
const elemB = new ElementB();
const elemC = new ElementC();

elemA.accept(visitor);
elemB.accept(visitor);
elemC.accept(visitor);
