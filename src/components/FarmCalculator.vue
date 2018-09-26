<template>
    <div class="container-fluid row mt-5">
        <div class="col-3"/>
        <VehicleList class="col-6"/>
        <div class="col-3"/>
    </div>
</template>

<script>
import VehicleList from './VehicleList';

export default {
    name: 'FarmCalculator',
    components: {
        VehicleList,
    },
    watch: {
        
    }
}
</script>

