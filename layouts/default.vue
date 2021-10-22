<template>
  <v-app>
    <v-main>
      <v-container fluid id="default-container">
        <v-layout align-center justify-center>
          <Nuxt style="background-color: white"/>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  background: linear-gradient(184.34deg, #2fa9ed -13.04%, #024eb9 101.67%, rgba(32, 116, 230, 0) 101.69%);
}
#default-container{
  height: 100%;
}
.layout{
  height: 100%;
  max-width: 100%;
}
</style>

