<template>
<div>
  <div v-for="repository in repositories" :key="repository">
    {{ repository.name }}
  </div>
</div>
</template>

<script>
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import { toRefs } from 'vue'
export default {
  // components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { type: String }
  },
  setup(props) {
    const { user } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(user)

    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    }
  },
  data () {
    return {
      filters: { }, // 3
    }
  },
  computed: {
    filteredRepositories () {
      return null
     }, // 3
  },
  methods: {
    updateFilters () { }, // 3
  },
}
</script>