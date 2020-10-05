<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>
export default {
  name: 'RepositoriesFilters',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  }
}
</script>