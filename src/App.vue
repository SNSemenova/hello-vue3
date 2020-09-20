<template>
  <input type="radio" v-model="user" id="user1" value="yyx990803"/>
  <label for="user1">Evan You</label>
  <input type="radio" v-model="user" id="user2" value="SNSemenova"/>
  <label for="user2">Svetlana Semenova</label>
  <user-repositories :user="user"/>
</template>

<script>
import UserRepositories from './components/UserRepositories.vue'

export default {
  name: 'App',
  components: {
    UserRepositories
  },
  data() {
    return {
      user: 'SNSemenova'
    }
  }
}
</script>
