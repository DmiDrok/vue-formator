<template>
  <input 
    :value="modelValue"
    @input="updateValue"
    class="create-form-field__input form-control form-control-lg" type="text" placeholder="Любое название"
  >
</template>

<script>
export default {
  name: 'FieldInput',

  props: {
    modelValue: String,
  },

  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

</style>