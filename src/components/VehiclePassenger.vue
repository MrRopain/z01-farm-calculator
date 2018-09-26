<template>
    <div>
        <label>
            Rucksack
            <input v-model="backpackName"/>
        </label>
    </div>
</template>
<script>
import _ from 'lodash';

import { backpackRepo } from '../js/objectRepositories';

export default {
    name: 'VehiclePassenger',
    props: {
        value: {
            type: Object,
            default: {}
        }
    },
    data: () => ({
        backpackName: '',
    }),
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
