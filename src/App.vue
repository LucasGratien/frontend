<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import UserList from './views/UserList.vue';

export default {
  components: {
    UserList
  }
}
</script>

<style scoped>

</style>
