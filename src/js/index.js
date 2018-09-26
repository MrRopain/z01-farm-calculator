import Tour from './tour';

const repositories = {
    ItemRepo: new ObjectRepository(Item, itemStats),
    BackpackRepo: new ObjectRepository(Backpack, backpackStats),
    VehicleRepo: new ObjectRepository(Vehicle, vehicleStats),
};

const {
    ItemRepo,
    BackpackRepo,
    VehicleRepo,
} = repositories;

const tour = new Tour();
const hummingbird = tour.addVehicle('Hummingbird');
hummingbird.addPassengerWithBackpack('Bergen');
hummingbird.addPassengerWithBackpack('Bergen');
hummingbird.addPassengerWithBackpack('Bergen');
hummingbird.addPassengerWithBackpack('Bergen');
