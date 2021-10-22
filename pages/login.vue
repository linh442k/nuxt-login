<template>
  <div class="login-form rounded pa-6">
    <v-img src="/logo.png" max-width="13.75rem" class="mt-6 mb-6"></v-img>
    <no-ssr>
      <validation-observer
        ref="observer"
      >
        <form @submit.prevent="login()">
          <default-text-field
            :vuetify-class="'mb-2'"
            :label="'Tên tài khoản'"
            :vee-name="'Tên tài khoản'"
            :rules="'required'"
            :append="'mdi-account'"
            v-model="username"/>

          <default-text-field
            :label="'Mật khẩu'"
            :vee-name="'Mật khẩu'"
            :rules="'required'"
            :append="'mdi-lock'"
            :type="'password'"
            v-model="password"/>

          <!--    <v-btn-->
          <!--      :to="{name: 'password-reset'}"-->
          <!--      class="text-uppercase"-->
          <!--      :color="'primary'"-->
          <!--      text-->
          <!--      depressed-->
          <!--    >quên mật khẩu-->
          <!--    </v-btn>-->

          <default-btn
            :route-name="'password-reset'"
            :vuetify-class="'text-uppercase'"
            :color="'primary'"
            :text="true"
            :depressed="true"
            :content="'quên mật khẩu'"/>

          <!--    <v-btn-->
          <!--      :to="{name: 'registration', params: {_ :''}}"-->
          <!--      class="text-uppercase"-->
          <!--      :color="'primary'"-->
          <!--      text-->
          <!--      depressed-->
          <!--    >đăng kí-->
          <!--    </v-btn>-->

          <default-btn
            :route-name="'registration'"
            :vuetify-class="'text-uppercase'"
            :color="'primary'"
            :text="true"
            :depressed="true"
            :content="'đăng kí'"/>

          <!--          <v-btn-->
          <!--            :to="''"-->
          <!--            class="text-uppercase"-->
          <!--            :color="'primary'"-->
          <!--            depressed-->
          <!--            type="submit"-->
          <!--          >đăng nhập-->
          <!--          </v-btn>-->

          <default-btn
            :vuetify-class="'text-uppercase white--text'"
            :color="'blue'"
            :depressed="true"
            :type="'submit'"
            :content="'đăng nhập'"
            id="login-btn"
          />
        </form>
      </validation-observer>
    </no-ssr>

  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async login() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        // ABORT!!
      } else {
        this.$store.commit('auth/setUser', this.username)
        this.$store.commit('auth/setPass', this.password)
        this.$router.push({name: "dashboard"})
      }
    }
  }
}
</script>

<style scoped>
#login-btn{
  width: 40%;
}
.login-form{
  max-width: 80%;
}
</style>
