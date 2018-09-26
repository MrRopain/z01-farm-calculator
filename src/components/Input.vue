<template>
    <div class="form-group">
        <label :for="id" class="mb-0" v-text="label"/>
        <input :id="id" class="form-control p-2 bg-light" v-model="internalValue"/>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: 'Input',
    props: {
        id: { type: String, default: () => _.uniqueId() },
        label: { type: String, required: true },
        value: { type: String, required: true },
    },
    data() {
        return { internalValue: '' };
    },
    watch: {
        value(value) {
            this.internalValue = value;
        },

        internalValue(value) {
            this.$emit('input', value);
        }
    }
}
</script>