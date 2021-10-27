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
              <v-alert v-if="incorrect_info" width="100%" outlined class="mb-3" type="error">
                Thông tin đăng nhập không đúng
              </v-alert>
              <default-text-field
                :vuetify-class="''"
                :label="'Tên tài khoản'"
                :vee-name="'Tên tài khoản'"
                :rules="'required'"
                :append="'mdi-account'"
                :loading="loading"
                v-model="username"/>
              <default-text-field
                :label="'Mật khẩu'"
                :vee-name="'Mật khẩu'"
                :rules="'required'"
                :append="'mdi-lock'"
                :type="'password'"
                :loading="loading"
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
              <v-row no-gutters class="fill-height" justify="center">
                <v-col>
                  <default-btn
                    :route-name="'password-reset'"
                    :vuetify-class="'text-uppercase mx-2 px-4'"
                    :color="'primary'"
                    :text="true"
                    :depressed="true"
                    :content="'quên mật khẩu'"/>
                </v-col>
                <v-spacer></v-spacer>
                <!--    <v-btn-->
                <!--      :to="{name: 'registration', params: {_ :''}}"-->
                <!--      class="text-uppercase"-->
                <!--      :color="'primary'"-->
                <!--      text-->
                <!--      depressed-->
                <!--    >đăng kí-->
                <!--    </v-btn>-->

                <v-col>
                  <default-btn
                    :route-name="'registration'"
                    :vuetify-class="'text-uppercase px-2'"
                    :color="'primary'"
                    :text="true"
                    :depressed="true"
                    :content="'đăng ký'"/>

                  <!--          <v-btn-->
                  <!--            :to="''"-->
                  <!--            class="text-uppercase"-->
                  <!--            :color="'primary'"-->
                  <!--            depressed-->
                  <!--            type="submit"-->
                  <!--          >đăng nhập-->
                  <!--          </v-btn>-->
                </v-col>
                <default-btn
                  :vuetify-class="'text-uppercase white--text px-2 ml-2'"
                  :color="'blue'"
                  :depressed="true"
                  :type="'submit'"
                  :content="'đăng nhập'"
                  :elevation="1"
                  :loading="loading"
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
  middleware: ["fauth"],
  data: () => ({
    username: "",
    password: "",
    incorrect_info: false,
    loading: false,
  }),
  methods: {
    async login() {
      this.loading=true
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.loading=false
        // ABORT!!
      } else {
        this.loading=false
        if (this.username !== "Linh") {
          this.incorrect_info = true;
          return;
        }
        this.$store.commit('fauth/setUser', this.username)
        this.$store.commit('fauth/setPass', this.password)
        await this.$router.push({name: "dashboard"})
      }
    }
  }
}
</script>

<style scoped>
.login-form-wrapper {
  background-color: white !important;
}

#login-btn {
  width: 40%;
}
</style>
