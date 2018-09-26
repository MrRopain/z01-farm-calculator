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
     * @param {VehiclePassenger} passenger 
     */
    addPassenger(passenger) {
        if (!this.canTakePassengers()) {
            return;
        }

        this.passengers.push(passenger);
    }

    /**
     * Returns the name of this vehicle.
     */
    getName() {
        return this.stats.name;
    }

    /**
     * Returns the vehicle's volume.
     */
    getVolume() {
        return this.stats.volume;
    }

    /**
     * Returns the vehicle's value.
     */
    getValue() {
        return this.stats.value;
    }

    /**
     * Returns the vehicle's seats.
     */
    getSeats() {
        return this.stats.seats;
    }

    /**
     * Returns whether or not the vehicle can take
     * any more passengers.
     */
    canTakePassengers() {
        return this.stats.seats > this.passengers.length;
    }

    /**
     * Returns the total volume of the vehicle and
     * all passengers inside.
     */
    getTotalVolume() {
        let totalVolume = this.getVolume();
        this.passengers.forEach(passenger => { totalVolume += passenger.getBackpack().getVolume() });
        return totalVolume;
    }
}
