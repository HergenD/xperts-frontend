<template>
  <v-app>
    <v-app-bar
        app
        dense
        flat
    >

      <v-tabs
        v-model="tab"
      >
        <v-tab href="#analyze">Analyze</v-tab>
        <v-tab href="#about">The Team</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon class="mr-4">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <DarkToggle/>
    </v-app-bar>

    <v-main>
      <v-tabs-items         
        style="background:transparent" 
        v-model="tab"
      >
        <v-tab-item
          value="analyze"
        >
          <Analyze/>
        </v-tab-item>
        <v-tab-item
          value="about"
        >
          <AboutUs/>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import Analyze from '@/views/Analyze';
import DarkToggle from "@/components/DarkToggle";
import AboutUs from './components/AboutUs.vue';

export default {
  name: 'App',

  components: {
    DarkToggle,
    Analyze,
    AboutUs
  },

  data: () => ({
    tab:null
  }),
};
</script>
