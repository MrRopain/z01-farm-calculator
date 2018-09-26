import VehiclePassenger from './vehiclePassenger';

/**
 * Represents a vehicle within the game.
 */
export default class Vehicle {

    constructor(stats) {
        this.stats = stats;
        this.passengers = [];
    }

    /**
     * Adds a passenger to the vehicle.
     */
    addEmptyPassenger() {
        this.passengers.push(new VehiclePassenger());
    }

    /**
     * Returns the name of this vehicle.
     */
    getName() {
        return _.get(this, 'stats.name', 'empty');
    }

    /**
     * Returns the vehicle's volume.
     */
    getVolume() {
        return _.get(this, 'stats.volume', 0);
    }

    /**
     * Returns the vehicle's value.
     */
    getValue() {
        return _.get(this, 'stats.value', 0);
    }

    /**
     * Returns the vehicle's seats.
     */
    getSeats() {
        return _.get(this, 'stats.seats', 0);
    }

    getPassengers() {
        return _.filter(this.passengers, e => !_.isNull(e));
    }

    /**
     * Returns whether or not this vehicle jas
     * passengers.
     */
    hasPassengers() {
        return this.passengers.length !== 0;
    }

    /**
     * Returns whether or not the vehicle can take
     * any more passengers.
     */
    canTakePassengers() {
        return this.getSeats() > this.passengers.length;
    }

    /**
     * Returns the total volume of the vehicle and
     * all passengers inside.
     */
    getTotalVolume() {
        return this.getVolume() + _.sumBy(this.getPassengers(), e => e.getBackpackVolume());
    }
}
