<template>
    <div>
        <div class="row">
            <div class="col-8 pr-1">
                <ObjectAutocomplete
                    label="Fahrzeug"
                    v-model="vehicleName"
                    :values="vehicleStats"
                />
            </div>

            <div class="col-4 pl-1">
                <el-input-number
                    class="w-100"
                    v-model="passengers"
                    :min="1"
                    :max="value.getSeats()"
                    :handle-change="changePassengerCount()"
                />
            </div>
        </div>

        <VehiclePassengerList :vehicle="value"/>
    </div>
</template>
<script>
import _ from 'lodash';

import { vehicleRepo } from '../js/objectRepositories';
import { vehicleStats } from '../js/objectStats';

import Input from './Input';
import ObjectAutocomplete from './ObjectAutocomplete';
import VehiclePassengerList from './VehiclePassengerList';

export default {
    name: 'VehicleUi',
    components: {
        Input,
        ObjectAutocomplete,
        VehiclePassengerList,
    },
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            vehicleName: '',
            passengers: 1,
        };
    },
    computed: {
        vehicleStats: () => vehicleStats,
    },
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
        },

        changePassengerCount() {
            if (this.value.passengers.length > this.passengers) {
                this.value.passengers = _.dropRight(this.value.passengers);
            }
            if (this.value.passengers.length < this.passengers) {
                this.value.addEmptyPassenger();
            }
        },
    }
}
</script>
