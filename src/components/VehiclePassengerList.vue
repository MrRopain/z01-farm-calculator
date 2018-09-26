<template>
    <div>
        <VehiclePassengerUi
            v-for="(passenger, index) in passengers" :key="index"
            v-model="passengers[index]"
        />
        <button
            v-if="vehicle.canTakePassengers()"
            @click="addPassenger()"
        >Passagier hinzufügen</button>
        {{passengers}}
    </div>
</template>
<script>
import VehiclePassenger from '../js/vehiclePassenger';
import VehiclePassengerUi from './VehiclePassenger';

export default {
    name: 'VehiclePassengerList',
    components: {
        VehiclePassengerUi,
    },
    props: {
        vehicle: {
            type: Object,
            default: {},
        }
    },
    data: () => ({
        passengerCount: 1,
        passengers: [],
    }),
    watch: {
        passengers(value) {
            this.vehicle.passengers = value;
        }
    },
    methods: {

        addPassenger() {
            this.passengers.push(new VehiclePassenger());
        }
    }
}
</script>
