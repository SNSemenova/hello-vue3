<template>
  <div>
    <div v-for="repository in repositories" :key="repository">
      {{ repository.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepositoriesList',
  props: {
    repositories: {
      type: Array
    }
  }
}
</script>