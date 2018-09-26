import _ from 'lodash';

export default class Backpack {

    constructor(stats) {
        this.stats = stats;
    }

    getVolume() {
        return _.get(this, 'stats.volume', 0);
    }
}
