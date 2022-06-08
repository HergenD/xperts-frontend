<template>
  <div>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/seungah.jpg"
          ></v-img>

          <v-card-title>Seung Ah Pyun</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-language-python</v-icon>
              <v-icon>mdi-panda</v-icon>
              <v-icon>mdi-brain</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Scientist
            </div>

            <div>There should be some text about yourself here!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2"
                     @click="mail('seungahpyun@icloud.com')"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('seungahpyun@icloud.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/seungah.jpg"
          ></v-img>

          <v-card-title>Seung Ah Pyun</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-language-python</v-icon>
              <v-icon>mdi-panda</v-icon>
              <v-icon>mdi-brain</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Scientist
            </div>

            <div>There should be some text about yourself here!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('seungahpyun@icloud.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
          <v-img
              height="300"
              src="@/assets/seungah.jpg"
          ></v-img>

          <v-card-title>Seung Ah Pyun</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-icon>mdi-language-python</v-icon>
              <v-icon>mdi-panda</v-icon>
              <v-icon>mdi-brain</v-icon>
            </v-row>
            <div class="my-4 text-subtitle-1">
              Data Scientist
            </div>

            <div>There should be some text about yourself here!</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Get to know me better</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-btn icon class="mr-2">
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="mail('seungahpyun@icloud.com')"
            >
              Contact me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>

export default {
  name: "AboutUs",
  data() {
    return {}
  },
  methods: {
    mail(email) {
      const mail = `mailto:${email}`;
      const a = document.createElement('a');
      a.href = mail;
      a.click();
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>