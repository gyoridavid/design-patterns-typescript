type NotificationEvent = {
    name: string;
    source: Component;
    data: any;
}

interface Mediator {
    notify(event: NotificationEvent): void;
}

class Component {
    constructor(private controller: Mediator) {}
    click(): void {
        this.controller.notify({
            name: 'button-click',
            source: this,
            data: null,
        });
    }
}

class Button extends Component {
    hide(): void {}
}

class Page implements Mediator {
    addComponent(component: Component): void {}
    notify(event: NotificationEvent): void {
        if (event.name === 'button-click') {
            // do something
        }
    }
}

// example usage
const page = new Page();
const button = new Button(page);
page.addComponent(button);
button.click();
