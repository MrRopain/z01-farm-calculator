export default class Item {

    constructor(stats) {
        this.stats = stats;
    }

    getName() {
        return this.stats.name;
    }

    getVolume() {
        return this.stats.volume;
    }

    getValue() {
        return this.stats.value;
    }
}
