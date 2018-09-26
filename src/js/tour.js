import { itemRepo, vehicleRepo } from './objectRepositories';

export default class Tour {

    constructor(itemName) {
        this.item = itemRepo.instantiate(itemName);
        this.vehicles = [];
    }

    calculateYield() {
        return Math.floor(this.getTotalVolume() / this.item.getVolume()) * this.item.getValue();
    }

    addVehicle(vehicleName) {
        const vehicle = vehicleRepo.instantiate(vehicleName);
        this.vehicles.push(vehicle);
        return vehicle;
    }

    getTotalVolume() {
        let totalVolume = 0;
        this.vehicles.forEach(vehicle => { totalVolume += vehicle.getTotalVolume(); });
        return totalVolume;
    }
}
