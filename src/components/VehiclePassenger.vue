<template>
    <ObjectAutocomplete
        class="mb-2"
        label="Rucksack"
        v-model="backpackName"
        :values="backpacks"
    />
</template>
<script>
import _ from 'lodash';

import { backpackRepo } from '../js/objectRepositories';
import { backpackStats } from '../js/objectStats';

import ObjectAutocomplete from './ObjectAutocomplete'

export default {
    name: 'VehiclePassenger',
    components: {
        ObjectAutocomplete,
    },
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
        backpackName: '',
    }),
    computed: {
        backpacks: () => backpackStats,
    },
    watch: {
        backpackName(value) {
            if (backpackRepo.exists(value)) {
                this.value.backpack = backpackRepo.instantiate(value);
            } else {
                this.value.backpack = null;
            }
        }
    }
}
</script>
