<template>
    <div>
        <VehicleUi
            v-for="(vehicle, index) in vehicles" :key="index"
            v-model="vehicles[index]"
        />
        <button @click="addVehicle()">Fahrzeug hinzufügen</button>
        <!-- {{vehicles}} -->
    </div>
</template>
<script>
import Tour from '../js/tour';
import VehicleUi from './Vehicle';

export default {
    name: 'VehicleList',
    components: {
        VehicleUi,
    },
    data: () => ({
        vehicleCount: 1,
        vehicles: [],
        tourYield: 0,
    }),
    watch: {
        vehicles: {
            deep: true,
            handler(value) {
                const tour = new Tour('Cannabis');
                tour.vehicles = value;
                this.tourYield = tour.calculateYield();
            }
        }
    },
    methods: {

        addVehicle() {
            this.vehicles.push(null);
        }
    }
}
</script>
