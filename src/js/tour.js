import _ from 'lodash';
import { itemRepo } from './objectRepositories';
import Vehicle from './vehicle';
import Item from './item'; 

/**
 * Represents a farm tour.
 */
export default class Tour {

    constructor() {
        this.item = new Item();
        this.vehicles = [];
    }

    /**
     * Adds a vehicle to the tour.
     */
    addEmptyVehicle() {
        this.vehicles.push(new Vehicle());
    }

    /**
     * Sets the item for the tour.
     * @param {string} itemName 
     */
    setItem(itemName) {
        this.item = itemRepo.instantiate(itemName);
    }

    /**
     * 
     */
    getItem() {
        return _.get(this, 'item', new Item());
    }

    getVehicles() {
        return _.filter(this.vehicles, e => !_.isNull(e));
    }

    /**
     * Returns the total volume for every vehicle
     * and passenger.
     * @returns {number}
     */
    getTotalVolume() {
        return _.sumBy(this.getVehicles(), e => e.getTotalVolume());
    }

    getYield() {
        const item = this.getItem();
        return Math.floor(this.getTotalVolume() / item.getVolume()) * item.getValue();
    }
}
