<template>
  <v-app>
    <v-app-bar
        app
        dense
        flat
    >

      <v-tabs>
        <v-tab>Analyze</v-tab>
        <v-tab>About</v-tab>
        <v-tab>Contact</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-4">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <DarkToggle/>
    </v-app-bar>

    <v-main>
      <Analyze/>
    </v-main>
  </v-app>
</template>

<script>
import Analyze from '@/views/Analyze';
import DarkToggle from "@/components/DarkToggle";

export default {
  name: 'App',

  components: {
    DarkToggle,
    Analyze,
  },

  data: () => ({
    //
  }),
};
</script>
