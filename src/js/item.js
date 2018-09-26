import _ from 'lodash';

export default class Item {

    constructor(stats) {
        this.stats = stats;
    }

    getName() {
        return _.get(this, 'stats.name', 'empty');
    }

    getVolume() {
        return _.get(this, 'stats.volume', 0);
    }

    getValue() {
        return _.get(this, 'stats.value', 0);
    }
}
