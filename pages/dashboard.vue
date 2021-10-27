<template>
  <div>
    <h1>Dashboard Page</h1>
<!--    <button @click="logout">Logout</button>-->
  </div>
</template>

<script>
export default {
  layout: "main",
  // middleware: ["fauth", "auth"]
  // methods: {
  //   logout() {
  //     this.$store.commit('auth/setUser', null)
  //     this.$store.commit('auth/setPass', null)
  //     this.$router.push({name: 'index'})
  //   }
  // }
}
</script>
