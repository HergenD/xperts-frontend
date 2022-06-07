<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          The X-Pert dental AI
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <FileUpload/>
      </v-col>

    </v-row>
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
