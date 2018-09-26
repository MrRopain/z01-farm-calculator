<template>
    <div>
        <ObjectAutocomplete
            class="mb-2"
            label="Rohstoff"
            v-model="resourceName"
            :values="resources"
        />

        <VehicleUi
            v-for="(vehicle, index) in tour.vehicles" :key="index"
            v-model="tour.vehicles[index]"
        />

        <!-- <button @click="tour.addEmptyVehicle()">
            Fahrzeug hinzufügen
        </button> -->

        <hr>

        {{tour.getYield().toLocaleString('de-DE')}}€
        <el-button
            class="float-right"
            @click="tour.addEmptyVehicle()"
        >
            <i class="fa fa-truck mr-2"/>
            Hinzufügen
        </el-button>

        <!-- <pre v-text="tour.vehicles" /> -->
    </div>
</template>
<script>
import Tour from '../js/tour';
import { itemStats } from '../js/objectStats';

import Input from './Input';
import ObjectAutocomplete from './ObjectAutocomplete';
import VehicleUi from './Vehicle';

export default {
    name: 'VehicleList',
    components: {
        Input,
        ObjectAutocomplete,
        VehicleUi,
    },
    data() {
        return {
            tour: new Tour(),
            resourceName: '',
        };
    },
    computed: {
        resources: () => itemStats
    },
    watch: {
        resourceName(value) {
            this.tour.setItem(value);
        }
    }
}
</script>
