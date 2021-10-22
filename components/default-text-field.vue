<template>
  <validation-provider
    v-slot="{errors}"
    :name=veeName
    :rules=rules>
    <v-text-field
      :value="value"
      @input="$emit('input', text)"
      v-model="text"

      :error-messages="errors"
      :type="type"
      :label="label"
      :color="color"
      :append-icon="append"
      :class="vuetifyClass"
    >
    </v-text-field>
  </validation-provider>
</template>

<script>
export default {
  name: "default-input",
  props: {
    value: {
      default: null,
    },

    label: {
      type: String,
    },
    rules: {
      type: [String, Object],
    },
    type: {
      type: String,
      default: "text",
    },
    color: {
      type: String,
      default: "",
    },
    append: {
      type: String,
      default: "",
    },
    veeName: {
      type: String,
      default: "",
    },
    vuetifyClass: {
      type: String,
      default: "",
    }
  },
  data: () => {
    return {
      text: "",
    }
  }
}
</script>

<style scoped>

</style>
