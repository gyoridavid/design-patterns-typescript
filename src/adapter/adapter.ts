interface ICar {
    fillUp():price;
}
export enum FUEL_TYPES {
    GAS,
    DIESEL
}
type price = number;

export class Car implements ICar {
    private brand:string;
    private fuelType:FUEL_TYPES;

    constructor(brand:string, fuelType:FUEL_TYPES) {
        this.brand = brand;
        this.fuelType = fuelType;
    }

    fillUp(): price {
        return 30;
    }

}

export class ElectricCar {
    private brand:string;

    constructor(brand:string) {
        this.brand = brand;
    }

    charge():price {
        return 10;
    }
}

export class ElectricCarAdapter implements ICar {
    private electricCar:ElectricCar;

    constructor(electricCar:ElectricCar) {
        this.electricCar = electricCar;
    }

    fillUp(): price {
        return this.electricCar.charge();
    }
}

export class TankStation {
    fillUp(car:ICar):price {
        return car.fillUp();
    }
}
