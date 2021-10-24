<template>
  <v-row no-gutters justify="center" align="center" class="fill-height">
    <v-col xl="4" lg="6" md="8" sm="10" class="rounded pa-3 login-form-wrapper">
      <no-ssr>
        <validation-observer
          ref="observer"
        >
          <!--          upper login form-->
          <form @submit.prevent="login()">
            <div class="upper-login-form pa-4">
              <v-row no-gutters justify="center" align="center" class="fill-height my-4">
                <v-img src="/logo.png" max-width="14.1875rem"></v-img>
              </v-row>
              <default-text-field
                :vuetify-class="''"
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
            </div>
            <!--    <v-btn-->
            <!--      :to="{name: 'password-reset'}"-->
            <!--      class="text-uppercase"-->
            <!--      :color="'primary'"-->
            <!--      text-->
            <!--      depressed-->
            <!--    >quên mật khẩu-->
            <!--    </v-btn>-->
            <!--          bottom login form-->
            <div class="bottom-login-form pa-2">
              <v-row no-gutters class="fill-height">
                <v-col xl="4">
                  <default-btn
                    :route-name="'password-reset'"
                    :vuetify-class="'text-uppercase'"
                    :color="'primary'"
                    :text="true"
                    :depressed="true"
                    :content="'quên mật khẩu'"/>
                </v-col>

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
                  :vuetify-class="'text-uppercase px-2'"
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
                  :vuetify-class="'text-uppercase white--text px-2 ml-2'"
                  :color="'blue'"
                  :depressed="true"
                  :type="'submit'"
                  :content="'đăng nhập'"
                  id="login-btn"
                />
              </v-row>
            </div>
          </form>
        </validation-observer>
      </no-ssr>
    </v-col>
  </v-row>
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
.login-form-wrapper {
  background-color: white !important;
}
</style>
