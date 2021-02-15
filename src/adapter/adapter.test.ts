import { FUEL_TYPES, Car, ElectricCar, ElectricCarAdapter, TankStation } from './adapter';

describe('testing', () => {
    it('car should be filled at the tank station', () => {
        const car = new Car('BMW', FUEL_TYPES.GAS);
        const tankStation = new TankStation();
        const price = tankStation.fillUp(car);
        expect(price).toBe(30);
    })
    it('electric car should be charged at the tank station', () => {
        const electricCar = new ElectricCar('Tesla');
        const electricCarAdapter = new ElectricCarAdapter(electricCar);
        const tankStation = new TankStation();
        const price = tankStation.fillUp(electricCarAdapter);
        expect(price).toBe(10);
    });
});
