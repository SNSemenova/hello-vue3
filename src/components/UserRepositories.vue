<template>
<div>
  <div v-for="repository in repositories" :key="repository">
    {{ repository.name }}
  </div>
</div>
</template>

<script>
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, toRefs, watch } from 'vue'
export default {
  // components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String }
  },
  setup(props) {
    const { user } = toRefs(props)

    let repositories = ref([])
    const getUserRepositories = async () => {
      repositories.value = await fetchUserRepositories(user.value)
    }

    onMounted(getUserRepositories)

    watch(user, getUserRepositories)

    return {
      repositories,
      getUserRepositories // functions returned behave the same as methods
    }
  },
  data () {
    return {
      filters: { }, // 3
      searchQuery: '' // 2
    }
  },
  computed: {
    filteredRepositories () {
      return null
     }, // 3
    repositoriesMatchingSearchQuery () { 
      return null
    }, // 2
  },
  methods: {
    updateFilters () { }, // 3
  },
}
</script>