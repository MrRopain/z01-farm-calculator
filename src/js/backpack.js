export default class Backpack {

    constructor(stats) {
        this.stats = stats;
    }

    getVolume() {
        return this.stats.volume;
    }
}
