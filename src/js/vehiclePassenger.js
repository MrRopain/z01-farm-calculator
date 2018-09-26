import { backpackRepo } from './objectRepositories';

export default class VehiclePassenger {

    constructor() {
        this.backpack = null;
    }
    
    /**
     * Sets the backpack for this passenger.
     * @param {string} backpackName
     * @returns {VehiclePassenger}
     */
    withBackpack(backpackName) {
        this.backpack = backpackRepo.instantiate(backpackName);
        return this;
    }

    /**
     * Returns the backpack for this passenger.
     * @returns {Backpack}
     */
    getBackpack() {
        return this.backpack;
    }
}
