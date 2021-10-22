<template>
  <div>
    <h1>
      Hello this is registration page
    </h1>
    <default-btn
      :vuetify-class="'text-uppercase'"
      :route-name="'index'"
      :color="'primary'"
      :depressed="true"
      :content="'về trang chủ'"/>
  </div>
</template>

<script>
export default {
  middleware: "auth"
}
</script>
