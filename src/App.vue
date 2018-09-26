<template>
<div id="app">
    <FarmCalculator />
</div>
</template>

<script>
import FarmCalculator from './components/FarmCalculator.vue'

export default {
    name: 'app',
    components: {
        FarmCalculator
    }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>

