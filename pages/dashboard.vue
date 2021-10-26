<template>
  <div>
    <h1>Dashboard Page</h1>
    <button @click="logout">Logout</button>

    <default-btn
      :vuetify-class="'text-uppercase'"
      :route-name="'password-reset'"
      :color="'primary'"
      :depressed="true"
      :content="'về trang chủ'"/>
  </div>
</template>

<script>
export default {
  layout: "main",
  middleware: "auth",
  methods: {
    logout() {
      this.$store.commit('auth/setUser', null)
      this.$store.commit('auth/setPass', null)
      this.$router.push({name: 'index'})
    }
  }
}
</script>
