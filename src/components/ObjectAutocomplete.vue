<template>
    <el-select
        class="d-block"
        v-model="internalValue"
        :placeholder="label"
    >
        <el-option
            v-for="item in availableValues"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </el-select>
</template>
<script>
import _ from 'lodash';

export default {
    name: 'ObjectAutocomplete',
    props: {
        label: { type: String, required: true },
        value: { type: String, required: true },
        values: { type: Array, required: true },
    },
    data() {
        return { internalValue: '' };
    },
    computed: {

        /**
         * Converts the values prop into an array
         * of objects, ready to be used with
         * element-ui.
         */
        availableValues() {
            const values = [];
            _.forEach(this.values, e => values.push({ value: e.name }));
            return values;
        }
    },
    watch: {

        /**
         * Watches over value and (re)assigns
         * internalValue on change.
         */
        value(value) {
            this.internalValue = value;
        },

        /** 
         * Watches over internalValue and emits
         * it on change.
         */
        internalValue(value) {
            this.$emit('input', value);
        }
    },
}
</script>
