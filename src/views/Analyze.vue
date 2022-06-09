<template>
  <v-container>
    <FileUpload/>
  </v-container>
</template>

<script>
  import FileUpload from "@/components/FileUpload";
  export default {
    name: 'HelloWorld',
    components: {FileUpload},
    data: () => ({
    }),
  }
</script>
