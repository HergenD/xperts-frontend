<template>
    <v-switch class="mt-6"
              v-model="$vuetify.theme.dark"
              inset
              :label="`${$vuetify.theme.dark ? '🌘' : '🌖'}`"
    ></v-switch>
</template>

<script>
export default {
  name: "DarkToggle"
}
</script>

<style scoped>
.custom-switch{
  /*margin:20px;*/
}
</style>