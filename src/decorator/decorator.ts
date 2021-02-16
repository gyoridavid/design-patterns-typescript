interface IRouteHandler {
    handle(req: any, res: any):void
}

export class RouteHandler implements IRouteHandler {
    handle(req: any, res: any): void {
        // concrete implementation
    }
}

export class TelemetryRouteHandler implements IRouteHandler {
    private routeHandler: IRouteHandler;

    constructor(handler: IRouteHandler) {
        this.routeHandler = handler;
    }

    handle(req: any, res: any): void {
        // do some telemetry init
        this.routeHandler.handle(req, res);
        // do some telemetry reporting
    }

}
