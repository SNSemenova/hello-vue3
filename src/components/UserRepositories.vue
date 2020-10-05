<template>
  <repositories-name-search v-model="searchQuery" />
  <repositories-list :repositories="repositories" />
</template>

<script>
import RepositoriesList from '@/components/RepositoriesList.vue'
import RepositoriesNameSearch from '@/components/RepositoriesNameSearch.vue'
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import { toRefs } from 'vue'
export default {
  components: { 
    RepositoriesNameSearch, 
    // RepositoriesFilters, 
    RepositoriesList
  },
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