<template>
  <v-btn
    :to="routeName===''? '':{name: routeName, params: {_ : routeParam}}"
    :class="vuetifyClass"
    :color="color"
    :depressed="depressed"
    :text="text"
    :type="type"
    @click="$emit(clickEventHandler)">
    {{ content }}
  </v-btn>
</template>

<script>
export default {
  name: "default-btn",
  props: {
    content: {
      type: String,
      default: "Click me",
    },
    vuetifyClass: {
      type: String,
      default: "",
    },
    routeName: {
      type: String,
      default: "",
    },
    routeParam: {
      type: [String, Number],
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    depressed: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "",
    },
    // clickEvent
    clickEventHandler: {
      type: String,
      default: "",
    }
  }
}
</script>

<style scoped>

</style>
