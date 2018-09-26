import _ from 'lodash';
import { itemStats, backpackStats, vehicleStats } from './objectStats';

import Item from './item';
import Backpack from './backpack';
import Vehicle from './vehicle';

class ObjectRepository {

    constructor(type, repository) {
        this.type = type;
        this.repository = repository;
    }

    /**
     * Returns whether or not there is a game object
     *
     * @param {string} name
     * @returns {boolean}
     */
    exists(name) {
        return _.some(this.repository, e => e.name === name);
    }

    /**
     * Instantiates a game object with the stats
     * associated with the given name.
     *
     * @param {string} name
     * @returns {Item|Backpack|Vehicle}
     */
    instantiate(name) {
        const stats = _.find(this.repository, e => e.name === name);
        return new (this.type)(stats);
    }
}

const itemRepo = new ObjectRepository(Item, itemStats);
const backpackRepo = new ObjectRepository(Backpack, backpackStats);
const vehicleRepo = new ObjectRepository(Vehicle, vehicleStats);

export {
    itemRepo,
    backpackRepo,
    vehicleRepo,
};
