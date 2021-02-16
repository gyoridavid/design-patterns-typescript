import { TelemetryRouteHandler } from './decorator'

describe('test decorator', () => {
    it('should decorate the route handler', () => {
        const { RouteHandler } = jest.createMockFromModule('./decorator');
        const handler = new RouteHandler();
        const telemetry = new TelemetryRouteHandler(handler);
        telemetry.handle({}, {});
        expect(handler.handle).toHaveBeenCalledTimes(1);
    });
});
