import _ from 'lodash';
import Backpack from './backpack';

export default class VehiclePassenger {

    constructor() {
        this.backpack = null;
    }

    /**
     * Sets the backpack for this passenger.
     * @param {Backpack} backpack 
     */
    setBackpack(backpack) {
        this.backpack = backpack;
    }
    
    /**
     * Returns the backpack for this passenger.
     * @returns {Backpack}
     */
    getBackpack() {
        return _.get(this, 'backpack', new Backpack());
    }

    getBackpackVolume() {
        return _.get(this, 'backpack.stats.volume', 0);
    }
}
