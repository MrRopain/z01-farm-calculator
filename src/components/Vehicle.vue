<template>
    <div>
        <label>
            Fahrzeug
            <input v-model="vehicleName"/>
            <VehiclePassengerList :vehicle="value"/>
        </label>
    </div>
</template>
<script>
import _ from 'lodash';

import { vehicleRepo } from '../js/objectRepositories';
import VehiclePassengerList from './VehiclePassengerList';

export default {
    name: 'VehicleUi',
    components: {
        VehiclePassengerList,
    },
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
        vehicleName: '',
    }),
    watch: {
        vehicleName(value) {
            if (vehicleRepo.exists(value)) {
                this.emitValue(vehicleRepo.instantiate(value));
            } else {
                this.emitValue(null);
            }
        }
    },
    methods: {

        emitValue(value) {
            this.$emit('input', value);
        }
    }
}
</script>
