<template>
    <div v-if="vehicle !== null">
        <h5 v-if="vehicle.hasPassengers()" class="font-weight-light">Passagiere</h5>
        <VehiclePassengerUi
            v-for="(passenger, index) in vehicle.passengers" :key="index"
            v-model="vehicle.passengers[index]"
        />
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
    }
}
</script>
